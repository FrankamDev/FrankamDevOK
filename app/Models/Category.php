<?php
class Category extends Model
{
    use HasFactory;

    protected $fillable = ['slug', 'order'];

    public function translations()
    {
        return $this->hasMany(CategoryTranslation::class);
    }

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'category_post');
    }

    public function translation($locale = null)
    {
        $locale = $locale ?? app()->getLocale();
        return $this->translations()->where('locale', $locale)->first();
    }
}
