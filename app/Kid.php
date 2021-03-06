<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Kid extends Model  
{
    protected $table = 'kids';

    public function parent() { 
        return $this->belongsTo("App\User", "user_id");
    }

    public function avatar() { 
        return $this->belongsTo("App\Avatar", "id");
    }

    public function trophies() {
        return $this->belongsToMany("App\Trophy", 'link_kids_trophies', 'kid_id', 'trophy_id');
    }

    public function creations() {
        return $this->hasMany("App\Creation", "kid_id");
    }

    public function categories() {
        return $this->belongsToMany("App\Category", 'link_kids_categories','kid_id','category_id');
    }

    // public function activities() {
    //      return $this->hasMany('App\Activity', 'sub_category_id')
    //       ->join('sub_categories', 'sub_categories.id', '=', 'activities.sub_category_id')
    //       ->join('categories', 'categories.id', '=', 'sub_categories.category_id')
    //       >join('link_kids_categories', 'link_kids_categories.category_id', '=', 'categories.id');
    // }
}
