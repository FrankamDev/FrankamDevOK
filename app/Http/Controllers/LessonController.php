<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LessonController extends Controller
{
  // public function showLesson(Course $course, Lesson $lesson)
  // {
  //   abort_if($lesson->course_id !== $course->id, 404);

  //   $lesson->increment('views');

  //   return Inertia::render('Lessons/LessonShow', [
  //     'course' => [
  //       'title' => $course->title,
  //       'slug' => $course->slug,
  //     ],
  //     'lesson' => [
  //       'id' => $lesson->id,
  //       'title' => $lesson->title,
  //       'content' => $lesson->content,
  //       'views' => $lesson->views,
  //       'video_url' => $lesson->video_url,
  //       'pdf_path' => $lesson->pdf_path,
  //       'reading_time' => $lesson->reading_time,
  //     ]
  //   ]);
  // }


  public function showLesson(Course $course, Lesson $lesson)
  {
    abort_if($lesson->course_id !== $course->id, 404);
    $lesson->increment('views');

    $html = $lesson->content ?? '';

    // Ajouter des IDs aux titres s'ils n'en ont pas
    $html = preg_replace_callback(
      '/<(h[1-6])([^>]*)>(.*?)<\/h[1-6]>/i',
      function ($matches) {
        $tag = $matches[1];
        $attrs = $matches[2];
        $text = strip_tags($matches[3]);

        // Générer un slug si pas d'ID
        if (!preg_match('/id=["\'](.*?)["\']/i', $attrs, $idMatch)) {
          $id = \Str::slug($text);
          $attrs .= " id=\"$id\"";
        }

        return "<$tag$attrs>$matches[3]</$tag>";
      },
      $html
    );

    return Inertia::render('Lessons/LessonShow', [
      'course' => [
        'title' => $course->title,
        'slug' => $course->slug,
      ],
      'lesson' => [
        'id' => $lesson->id,
        'title' => $lesson->title,
        'content' => $html,  // ← maintenant avec IDs
        'views' => $lesson->views,
        'video_url' => $lesson->video_url,
        'pdf_path' => $lesson->pdf_path,
        'reading_time' => $lesson->reading_time,
      ]
    ]);
  }
}
