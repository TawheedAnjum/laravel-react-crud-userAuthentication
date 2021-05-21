<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reset_Password;
use App\Mail\forgotMail;
use Mail;
use Auth;
use DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class forgotController extends Controller
{
    public function index(Request $request){
        $email = $request->email;

        $emailExists = User::where('email', $email);

        if(!$emailExists->count()){
            return response([
                "msg" => "Email not found"
            ], 404);
        }

        $token = rand(10,50000);


        Mail::to($email)->send(new forgotMail($token, $email));

        $insert = Reset_Password::create([
            'email' => $email,
            'token' => $token
        ]);
        
        return response([
            'msg' => "mail send"
        ], 200);
    }

    public function reset($email, $token, Request $request){

        try{
            $findData = Reset_Password::where('email', $email)
                                ->where('token', $token);


            if(!$findData->count()){
                return response([
                    "msg" => "Email not found"
                ], 404);
            }


            $newPassword = User::where('email', $email)
                ->update(['password' => Hash::make($request->password)]);

            if(!$newPassword){
                return response([
                    "msg" => "Password not update"
                ], 404);
            }

            $deletedRows = Reset_Password::where('email', $email)
                                        ->where('token', $token)
                                        ->delete();
            
            $user = User::where('email', $email)
            ->first();

            $newtoken = $user->createToken('authToken')->accessToken;

            return response([
                'massage' => "done",
                'token' => $newtoken,
                'user' => $user,
            ],200);

        }catch (Exception $e) {
            return response([
                'message' => $e->getMessage(),
            ],401);
        };

    }
}
