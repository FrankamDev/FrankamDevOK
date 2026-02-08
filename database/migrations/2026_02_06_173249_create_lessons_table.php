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
      $table->integer('reading_time')->nullable();
      $table->string('slug')->unique()->nullable();
      $table->integer(column: 'module_number')->nullable();
      $table->integer('lesson_number');
      $table->integer('views')->default(0);
      $table->string('title', 180);
      $table->longText('content')->nullable();
      $table->string(column: 'video_url')->nullable();
      $table->integer('video_duration')->nullable();
      $table->integer('reading_duration')->nullable();
      $table->integer('position')->default(0);
      $table->string('pdf_path')->nullable();
      $table->boolean('is_quiz')->default(false);
      $table->longText('quiz_data')->nullable();
      $table->enum('type', ['video', 'text', 'quiz', 'file', 'mixed'])->default('text');
      $table->enum('status', ['draft', 'published'])->default('draft');
      $table->timestamps();
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
