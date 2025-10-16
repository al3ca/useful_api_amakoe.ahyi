<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Validated;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|email|unique:users,email',
            'name' => 'required|string|min:5',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create($fields);

        $token = $user->createToken($request->name);

        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'created_at' => $user->created_at
        ];
    }

    public function login(Request $request)
    {

        $fields = $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required|string|min:8',
        ]);


        $user = User::where('email', $request->email)->first();
        $id = User::where('id', $request->email)->first();


        if (!$user || !Hash::check($request->password, $user->password)) {
            // abort(401);
            return ['message' => "identifiants invalides"];
        };

        $token = $user->createToken($user->name);

        return [
            'token' => $token,
            'user_id' => $user->id
        ];
    }
}
