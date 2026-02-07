<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Support\Str;

class LessonSeeder extends Seeder
{
  public function run()
  {
    $courses = Course::all(); // Récupère tous les cours

    foreach ($courses as $course) {
      for ($i = 1; $i <= 20; $i++) {
        Lesson::create([
          'course_id' => $course->id,
          'title' => "Lesson $i of {$course->title}",
          'slug' => Str::slug("Lesson $i of {$course->title}"),
          'position' => $i,
          'reading_time' => rand(5, 20), // temps de lecture aléatoire
          'content' => "Contenu de la leçon $i pour le cours {$course->title}.",
        ]);
      }
    }
  }
}
