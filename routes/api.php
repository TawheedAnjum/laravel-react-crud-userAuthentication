<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\authController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\forgotController;


Route::post('/login', [authController::class, 'login']);
Route::post('/register', [authController::class, 'register']);
Route::post('/forgot_password', [forgotController::class, 'index']);
Route::post('/reset_password/{email}/{token}', [forgotController::class, 'reset']);
Route::get('/home', [UserController::class, 'index'])->middleware('auth:api');;

