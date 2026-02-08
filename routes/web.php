<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LessonController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get(
  '/courses/{course:slug}/lessons/{lesson:slug}',
  [LessonController::class, 'showLesson']
)->name('lessons.show');
// ------------------- HOME -------------------
Route::get('/', [HomeController::class, 'index'])->name('home');

// ------------------- BLOG -------------------
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.show');

// ------------------- COURSES -------------------
// Liste des cours
Route::get('/courses', [CourseController::class, 'index'])->name('courses.index');

// Page d’un cours (slug SEO)
Route::get('/courses/{course:slug}', [CourseController::class, 'show'])->name('courses.show');

// Page d’une leçon d’un cours
Route::get('/courses/{course:slug}/{lesson:slug}', [CourseController::class, 'showLesson'])->name('courses.lesson.show');

// ------------------- GOOGLE AUTH -------------------
Route::get('/auth/redirect', function () {
  return Socialite::driver('google')->redirect();
})->name('auth.google');

Route::get('/auth/callback', function () {
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

  return redirect()->intended('/');
})->name('auth.google.callback');

// ------------------- DASHBOARD -------------------
Route::middleware(['auth', 'verified'])->group(function () {
  Route::get('/dashboard', function () {
    $user = auth()->user();
    $userRoles = $user->getRoleNames(); // ['super-admin', 'user', ...]

    return Inertia::render('dashboard', [
      'authUser' => $user,
      'userRoles' => $userRoles,
    ]);
  })->name('dashboard');
});

// ------------------- AUTRES ROUTES -------------------
require __DIR__ . '/settings.php';
