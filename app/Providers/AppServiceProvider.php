<?php

namespace App\Providers;

use App\Models\Course;
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

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
  public function boot(): void
  {
    $this->configureDefaults();
    Inertia::share([
      'auth.user' => function () {
        return auth()->user();
      },
    ]);



    Inertia::share([
      // Courses avec leurs leçons
      'courses' => function () {
        return Course::with(['lessons' => function ($q) {
          $q->orderBy('module_number')->orderBy('lesson_number');
        }])->get()->map(function ($course) {
          return [
            'id' => $course->id,
            'title' => $course->title,
            'slug' => $course->slug,
            'description' => $course->description,
            'level' => ucfirst($course->level),
            'lessons' => $course->lessons->map(fn($lesson) => [
              'id' => $lesson->id,
              'title' => $lesson->title,
              'slug' => $lesson->slug,
              'module_number' => $lesson->module_number,
              'lesson_number' => $lesson->lesson_number,
              'reading_duration' => $lesson->reading_duration,
              'video_duration' => $lesson->video_duration,
              'type' => $lesson->type,
            ])
          ];
        });
      },
    ]);
  }

  protected function configureDefaults(): void
  {
    Date::use(CarbonImmutable::class);

    DB::prohibitDestructiveCommands(
      app()->isProduction(),
    );

    Password::defaults(
      fn(): ?Password => app()->isProduction()
        ? Password::min(12)
        ->mixedCase()
        ->letters()
        ->numbers()
        ->symbols()
        ->uncompromised()
        : null
    );
  }
}
