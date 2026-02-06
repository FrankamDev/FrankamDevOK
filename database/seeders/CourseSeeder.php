<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Course;

class CourseSeeder extends Seeder
{
  public function run(): void
  {
    // Crée une catégorie de test si elle n'existe pas
    $category = Category::firstOrCreate(
      ['slug' => 'developpement-web'],
      ['name' => 'Développement Web', 'description' => 'Cours de dev web']
    );

    // Crée 10 cours
    for ($i = 1; $i <= 10; $i++) {
      Course::create([
        'title_short' => "Cours $i",
        'title' => "Formation complète $i",
        'slug' => "formation-$i",
        'category_id' => $category->id,
        'level' => ['beginner', 'intermediate', 'advanced'][array_rand(['beginner', 'intermediate', 'advanced'])],
        'description' => "Description du cours $i",
        'image' => "default.png",
        'status' => 'published',
        'objectives' => ["Objectif 1", "Objectif 2"],
        'prerequisites' => ["Prérequis 1"],
        'requirements' => ["Ordinateur"],
        'skills_acquired' => ["Compétence $i"],
        'curriculum' => [["module" => "Module 1", "lessons" => ["Lesson 1", "Lesson 2"]]],
        'price' => rand(0, 100),
      ]);
    }
  }
}
