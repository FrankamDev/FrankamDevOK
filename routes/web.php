<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FormationController;
use Laravel\Fortify\Features;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DashboardController;
use Laravel\Socialite\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

Route::get('/auth/redirect', function () {
  return Socialite::driver('google')->redirect();
});

Route::get('/auth/redirect', function () {
  $googleUser = Socialite::driver('google')->user();

  $user = User::updateOrCreate([
    'google_id' => $googleUser->id,
  ], [
    'name' => $googleUser->name,
    'email' => $googleUser->email,
    'google_token' => $googleUser->token,
    'google_refresh_token' => $googleUser->refreshToken,
  ]);

  Auth::login($user);

  return redirect('/');
});

Route::get('/courses/{slug}', [CourseController::class, 'show'])->name('courses.show');
Route::get('/courses', [CourseController::class, 'index'])->name('courses.index');
Route::get('/courses/{course:slug}', [CourseController::class, 'show'])->name('courses.show');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.show');
Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/courses', [CourseController::class, 'index'])->name('formation');
// Route::get('dashboard', [DashboardController::class, 'index'])
//   ->middleware(['auth', 'verified'])
//   ->name('dashboard');

Route::get('dashboard', function () {
  $user = auth()->user();
  $userRoles = $user->getRoleNames(); // ['super-admin', 'user', ...]

  return Inertia::render('dashboard', [
    'authUser' => $user,
    'userRoles' => $userRoles,
  ]);
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/settings.php';
