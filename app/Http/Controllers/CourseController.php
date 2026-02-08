<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Lesson;
use Inertia\Inertia;

class CourseController extends Controller
{
  public function index()
  {
    $courses = Course::select('id', 'title', 'slug', 'description', 'level')
      ->latest()
      ->get();

    return Inertia::render('courses/AllCoursesSection', [
      'courses' => $courses
    ]);
  }

  public function show(Course $course)
  {
    $course->load(['lessons' => function ($q) {
      $q->orderBy('module_number')->orderBy('lesson_number');
    }]);

    return Inertia::render('courses/CourseShow', [
      'course' => [
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
      ]
    ]);
  }

  public function showLesson(Course $course, Lesson $lesson)
  {
    abort_if($lesson->course_id !== $course->id, 404);

    $lesson->increment('views');

    return Inertia::render('Lessons/LessonShow', [
      'course' => [
        'title' => $course->title,
        'slug' => $course->slug,
      ],
      'lesson' => [
        'id' => $lesson->id,
        'title' => $lesson->title,
        'content' => $lesson->content,
        'views' => $lesson->views,
        'video_url' => $lesson->video_url,
        'pdf_path' => $lesson->pdf_path,
        'reading_time' => $lesson->reading_time,
      ]
    ]);
  }
}
