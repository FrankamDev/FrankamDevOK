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
      Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->enum('status', ['draft', 'published', 'scheduled'])->default('draft');
    $table->boolean('is_premium')->default(false);
    $table->timestamp('published_at')->nullable();
    $table->integer('reading_time')->default(0);
    $table->unsignedBigInteger('views')->default(0);
    $table->foreignId('series_id')->nullable()->constrained()->nullOnDelete();
    $table->foreignId('author_id')->constrained('users')->cascadeOnDelete();
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
