<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FormationController;
use Laravel\Fortify\Features;
use App\Http\Controllers\HomeController;
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/formation', [FormationController::class,'index'])->name('formation');
Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
