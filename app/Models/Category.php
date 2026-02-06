<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

  protected $fillable = ['name', 'slug', 'description', 'parent_id', 'order'];
  public function courses()
  {
    return $this->hasMany(Course::class);
  }

  public function children()
  {
    return $this->hasMany(Category::class, 'parent_id');
  }
}
