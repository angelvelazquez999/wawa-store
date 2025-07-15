<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            // Agrega la columna (tipo unsignedBigInteger si 'addresses.id' es bigIncrements)
            $table->unsignedBigInteger('address_id')->nullable()->after('id');

            // Clave foránea
            $table->foreign('address_id')->references('id')->on('addresses')->onDelete('set null');
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            // Primero eliminar la clave foránea
            $table->dropForeign(['address_id']);

            // Luego eliminar la columna
            $table->dropColumn('address_id');
        });
    }
};
