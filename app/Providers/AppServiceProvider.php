<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        // Asegurar que el directorio de vistas compiladas existe
        if (!is_dir(storage_path('framework/views'))) {
            mkdir(storage_path('framework/views'), 0755, true);
        }
    }
}
