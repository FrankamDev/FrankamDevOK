<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    // Affiche tous les posts publiés

  
    public function index()
    {
        // $posts = Post::where('status', 'published')
        //              ->orderBy('published_at', 'desc')
        //              ->get();

        $posts = Post::latest()
        ->with('user')
        ->get()
        ->map(fn ($post) => [
            'id' => $post->id,
            'slug' => $post->slug,
            'featured_image' => $post->featured_image,
            'reading_time' => $post->reading_time,
            'user' => $post->user?->name ?? 'admin',
            'description' => str($post->excerpt ?? '')->limit(140),
            'created_at' => $post->created_at->format('d M Y'),
        ]);

        return Inertia::render('Blog/BlogIndex', [
          'posts' => $posts
        ]);
    }

    // Affiche un post spécifique par slug
    public function show($slug)
    {
        $post = Post::where('slug', $slug)
                    ->where('status', 'published')
                    ->firstOrFail();

         return Inertia::render('Blog/BlogShow', [
          'post' => $post

         ]);
    }
}