<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{

  protected $fillable = [
    'title_short',
    'title',
    'slug',
    'image',
    'category_id',
    'level',
    'reading_duration',
    'duration_hours',
    'total_lessons',
    'total_quizzes',
    'description',
    'logo',
    'is_popular',
    'certified',
    'objectives',
    'prerequisites',
    'requirements',
    'skills_acquired',
    'curriculum',
    'price',
    'currency',
    'access_type',
    'status',
  ];
  public function category()
  {
    return $this->belongsTo(Category::class);
  }

  public function lessons()
  {
    return $this->hasMany(Lesson::class)->orderBy('order');
  }
  protected $casts = [
    'objectives' => 'array',
    'prerequisites' => 'array',
    'requirements' => 'array',
    'skills_acquired' => 'array',
    'curriculum' => 'array',
  ];
}
