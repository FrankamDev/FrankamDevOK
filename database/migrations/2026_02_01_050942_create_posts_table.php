<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->default(1)->cascadeOnDelete();
            $table->string('title')->nullable();
            $table->string('slug')->unique();
            $table->json('content');
            $table->string(column: 'featured_image')->nullable();
            $table->unsignedInteger('reading_time')->default(1);
            $table->enum('status', ['draft', 'published'])->default('draft');
            $table->boolean('is_premium')->default(false);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
