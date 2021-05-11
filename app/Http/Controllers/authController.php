<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use Auth;
use DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class authController extends Controller
{
    public function login(Request $request){
        if(Auth::attempt($request->only('email','password'))){
            $user = Auth::user();
            $token = $user->createToken('authToken')->accessToken;
            return response([
                'massage' => "success",
                'token' => $token,
                'user' => $user
            ]);
        }
        return response([
            'messages' => "faild"
        ]);
    }

    public function register(RegisterRequest $request){
        
        
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);
            
            $token = $user->createToken('authToken')->accessToken;
    
            return response([
                'massage' => "register",
                'token' => $token,
                'user' => $user
            ],200);
        } catch (Exception $e) {
            return response([
                'message' => $e->getMessage(),
            ],401);
        };
    }
}
