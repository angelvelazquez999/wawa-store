<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $featuredProducts = [
            [
                'name' => 'Urban Cargo Pants',
                'price' => 89.99,
                'stock' => 20,
                'image_path' => 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&h=600&q=80',
            ],
            [
                'name' => 'Street Graphic Tee',
                'price' => 34.99,
                'stock' => 30,
                'image_path' => 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&h=600&q=80',
            ],
            [
                'name' => 'Oversized Hoodie',
                'price' => 64.99,
                'stock' => 25,
                'image_path' => 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&h=600&q=80',
            ],
            [
                'name' => 'Urban Sneakers',
                'price' => 119.99,
                'stock' => 15,
                'image_path' => 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&h=600&q=80',
            ],
            [
                'name' => 'Vintage Denim Jacket',
                'price' => 95.50,
                'stock' => 10,
                'image_path' => 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&h=600&q=80',
            ],
            [
                'name' => 'Classic Tracksuit',
                'price' => 120.00,
                'stock' => 18,
                'image_path' => 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=500&h=600&q=80',
            ],
            [
                'name' => 'Shoes with Retro Vibes',
                'price' => 75.00,
                'stock' => 22,
                'image_path' => 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg',
            ],
            [
                'name' => 'Backpack for Urban Adventures',
                'price' => 59.99,
                'stock' => 28,
                'image_path' => 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
            ],
        ];

        foreach ($featuredProducts as $product) {
            Product::create($product);
        }
    }
}
