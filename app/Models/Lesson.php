<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
  protected $fillable = [
    'course_id',
    'module_number',
    'lesson_number',
    'title',
    'slug',
    'content',
    'video_url',
    'video_duration',
    'reading_duration',
    'position',
    'reading_time',
    'pdf_path',
    'is_quiz',
    'quiz_data',
    'type',
    'status',
  ];

  protected $casts = [
    'quiz_data' => 'array', // si tu veux stocker questions/réponses en JSON
  ];

  // Relation vers le cours parent
  public function course()
  {
    return $this->belongsTo(Course::class);
  }

  protected static function boot()
  {
    parent::boot();

    static::creating(function ($lesson) {
      $lesson->slug = Str::slug($lesson->title);
    });
  }
}
