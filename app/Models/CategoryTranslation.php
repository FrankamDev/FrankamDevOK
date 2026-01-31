<?php

class CategoryTranslation extends Model
{
    use HasFactory;

    protected $fillable = ['category_id', 'locale', 'name', 'description'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
