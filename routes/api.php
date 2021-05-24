<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\authController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\forgotController;
use App\Http\Controllers\ProductController;


Route::post('/login', [authController::class, 'login']);
Route::post('/register', [authController::class, 'register']);
Route::post('/forgot_password', [forgotController::class, 'index']);
Route::post('/reset_password/{email}/{token}', [forgotController::class, 'reset']);
Route::get('/home', [UserController::class, 'index'])->middleware('auth:api');



// crud
Route::get('/products', [ProductController::class, 'index']);
Route::post('/products', [ProductController::class, 'store']);
Route::post('/products/edit/{id}', [ProductController::class, 'edit']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/products/delete/{id}', [ProductController::class, 'distroy']);



