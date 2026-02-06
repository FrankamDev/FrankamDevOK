<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('lessons', function (Blueprint $table) {
      $table->id();
      $table->foreignId('course_id')->constrained()->cascadeOnDelete();

      $table->integer('module_number')->nullable();     // 1, 2, 3...
      $table->integer('lesson_number');                 // ordre dans le module

      $table->string('title', 180);
      $table->string('slug', 200);

      $table->longText('content')->nullable();          // texte riche

      $table->string('video_url')->nullable();
      $table->integer('video_duration')->nullable();    // secondes

      $table->integer('reading_duration')->nullable();  // minutes estimées

      $table->integer('order')->default(0);

      // Pour gérer les quizzes dans la même table (minimal)
      $table->boolean('is_quiz')->default(false);
      $table->json('quiz_data')->nullable();            // questions/réponses si quiz simple

      $table->enum('type', ['video', 'text', 'quiz', 'file', 'mixed'])->default('text');

      $table->enum('status', ['draft', 'published'])->default('draft');

      $table->timestamps();

      // Unicité du slug par cours
      $table->unique(['course_id', 'slug']);
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('lessons');
  }
};
