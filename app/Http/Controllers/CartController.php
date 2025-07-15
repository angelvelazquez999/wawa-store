<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    use AuthorizesRequests;
    public function index()
    {
        $carts = Auth::user()->carts()
            ->with('product')
            ->latest()
            ->get();

        return response()->json($carts);
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
            'product_id' => 'required|exists:products,id',
        ]);

        $user = Auth::user();

        // Evita duplicados
        $exists = $user->carts()->where('product_id', $validated['product_id'])->first();

        if ($exists) {
            return response()->json(['message' => 'Este producto ya está en tu carrito.'], 409);
        }

        $cartItem = $user->carts()->create($validated);

        return response()->json($cartItem, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        return Inertia::render('Cart'); // Aquí el nombre debe coincidir con tu archivo Cart.jsx
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

    public function count()
    {
        $count = Auth::user()->carts()->count();
        return response()->json(['count' => $count]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        // Asegúrate que solo el dueño puede eliminarlo
        if ($cart->user_id !== Auth::id()) {
            return response()->json(['message' => 'No autorizado.'], 403);
        }

        $cart->delete();

        return response()->json(['message' => 'Producto eliminado del carrito.']);
    }
}
