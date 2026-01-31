<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostTranslation extends Model
{
    use HasFactory;

    protected $fillable = [
        'post_id', 'locale', 'title', 'slug', 'excerpt', 'content',
        'meta_title', 'meta_description', 'og_image'
    ];

    protected $casts = [
        'content' => 'array', // TipTap JSON
    ];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
