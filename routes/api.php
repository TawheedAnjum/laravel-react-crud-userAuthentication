<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\authController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::post('/login', 'authController@login');
// Route::post('/register', 'authController@register');
// Route::get('/home','UserController@index')->middleware('auth:api');
Route::post('/login', [authController::class, 'login']);
Route::post('/register', [authController::class, 'register']);
Route::get('/home', [UserController::class, 'index'])->middleware('auth:api');;

