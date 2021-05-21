<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reset_Password extends Model
{
    use HasFactory;

    protected $table = 'reset_password';
    protected $primaryKey = 'ID';
    protected $fillable = [
        'email',
        'token',
    ];
    public $timestamps = false;
}
