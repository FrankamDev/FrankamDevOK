<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    // User::factory(10)->create();
    $this->call([
      CourseSeeder::class,
      LessonSeeder::class,
    ]);
    $this->call(LessonSeeder::class);

    LessonSeeder::class;
    User::factory()->create([
      'name' => 'Frank User',
      'email' => 'frank@example.com',
    ]);
  }
}
