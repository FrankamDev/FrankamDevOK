<?php


class TagTranslation extends Model
{
    use HasFactory;

    protected $fillable = ['tag_id', 'locale', 'name', 'description'];

    public function category()
    {
        return $this->belongsTo(Tag::class);
    }
}
