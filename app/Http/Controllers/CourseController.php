<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Inertia\Inertia;

class CourseController extends Controller
{
  /**
   * Affiche la page des cours (pour les visiteurs)
   */
  public function index()
  {
    $courses = Course::all();

    return Inertia::render('courses/AllCoursesSection', [
      'courses' => $courses
    ]);
  }


  public function show($id)
  {
    $course = Course::with(['lessons' => function ($q) {
      $q->orderBy('order');
    }])->where('id', $id)->firstOrFail();


    $data = [
      'id' => $course->id,
      'title' => $course->title,
      'slug' => $course->slug,
      'description' => $course->description,
      'image' => $course->image ?? '/images/course-placeholder.jpg',
      'level' => ucfirst($course->level),
      'duration' => $course->duration_hours ? $course->duration_hours . ' h' : 'N/A',
      'lessons_count' => $course->total_lessons,
      'popularity' => $course->is_popular ? 4.5 : null,
      'objectives' => $course->objectives ?? [],
      'prerequisites' => $course->prerequisites ?? [],
      'lessons' => $course->lessons->map(function ($lesson) {
        return [
          'id' => $lesson->id,
          'title' => $lesson->title,
          'slug' => $lesson->slug,
          'duration' => $lesson->reading_duration ? $lesson->reading_duration . ' min' : 'N/A',
          'is_completed' => false,
          'order' => $lesson->order,
        ];
      }),
    ];
    return Inertia::render('courses/CourseShow', ['course' => $data]);
  }
}
