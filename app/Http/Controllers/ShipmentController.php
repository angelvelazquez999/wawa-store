<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shipment;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Inertia\Inertia;

class ShipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    use AuthorizesRequests;
    public function index()
    {
        $shipments = Auth::user()->shipments()->with('address')->latest()->get();

        // Para cada shipment, obtener productos a partir del array products_ids
        $shipments->each(function ($shipment) {
            $shipment->products = Product::whereIn('id', $shipment->products_ids)->get();
        });

        return response()->json($shipments);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'address_id' => 'required|exists:addresses,id',
        ]);

        $user = Auth::user();

        // Cargar productos del carrito
        $cartItems = $user->carts()->with('product')->get();

        if ($cartItems->isEmpty()) {
            return response()->json(['message' => 'El carrito está vacío.'], 400);
        }

        // Calcular total
        $total = $cartItems->sum(fn($item) => $item->product->price);

        // Obtener IDs de productos
        $productIds = $cartItems->pluck('product_id')->toArray();

        // Crear el envío
        $shipment = Shipment::create([
            'user_id' => $user->id,
            'address_id' => $validated['address_id'],
            'status' => 'pending',
            'products_ids' => $productIds,
            'total' => $total,
        ]);

        // Descontar stock de cada producto
        foreach ($cartItems as $item) {
            $product = $item->product;
            if ($product->stock > 0) {
                $product->decrement('stock');
            }
        }

        // Eliminar carrito (soft delete)
        $user->carts()->delete();

        return response()->json($shipment, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        return Inertia::render('Shipments');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
