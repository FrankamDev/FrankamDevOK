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
    Schema::create('courses', function (Blueprint $table) {
      $table->id();
      $table->string('title_short', 80);
      $table->string('title', 150);
      $table->string('image')->nullable();
      $table->string('slug', 160)->unique();
      $table->foreignId('category_id')->nullable()->constrained()->onDelete('cascade');

      $table->enum('level', ['beginner', 'intermediate', 'advanced']);
      $table->integer('reading_duration')->nullable();     // en minutes
      $table->decimal('duration_hours', 5, 1)->nullable(); // ex: 14.5

      $table->integer('total_lessons')->default(0);
      $table->integer('total_quizzes')->default(0);

      $table->longText('description')->nullable();         // Rich Text + images

      $table->string('logo')->nullable();                  // chemin ou URL

      $table->boolean('is_popular')->default(false);

      $table->boolean('certified')->default(false);

      $table->longText('objectives')->nullable();
      $table->longText('prerequisites')->nullable();
      $table->longText('requirements')->nullable();
      $table->longText('skills_acquired')->nullable();
      $table->longText('curriculum')->nullable();            // [{module: "...", lessons: [...]}]

      // Tarification & accès
      $table->decimal('price', 10, 2)->nullable()->default(0);
      $table->string('currency', 3)->default('EUR');
      $table->enum('access_type', ['free', 'paid', 'one_time', 'subscription'])->default('free');

      // Statut publication
      $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
      $table->timestamp('published_at')->nullable();

      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('courses');
  }
};
