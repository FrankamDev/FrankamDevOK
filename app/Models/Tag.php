<?php

class Tag extends Model
{
    use HasFactory;

    protected $fillable = ['slug'];

    public function translations()
    {
        return $this->hasMany(TagTranslation::class);
    }

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'tag_post');
    }

    public function translation($locale = null)
    {
        $locale = $locale ?? app()->getLocale();
        return $this->translations()->where('locale', $locale)->first();
    }
}
