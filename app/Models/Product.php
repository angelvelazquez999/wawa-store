<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Cart;
use Illuminate\Database\Eloquent\SoftDeletes;


class Product extends Model
{
    //

    use SoftDeletes;
    protected $fillable = ['name', 'price', 'stock', 'image_path'];


    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function getImageUrlAttribute()
    {
        return $this->image_path
            ? asset('storage/' . $this->image_path)
            : null; // o asset('images/default-product.png');
    }

    public function scopeAvailable($query)
    {
        return $query->where('stock', '>', 0);
    }
}
