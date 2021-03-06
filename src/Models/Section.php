<?php

namespace Fusion\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['blueprint_id', 'name', 'handle', 'description', 'placement', 'order'];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'sections';

    /**
     * Get the fields for the given section.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function fields()
    {
        return $this->hasMany(Field::class)->orderBy('order');
    }

    /**
     * A section belongs to a blueprint.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function blueprint()
    {
        return $this->belongsTo(Blueprint::class);
    }
}
