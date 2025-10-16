<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Illuminate\Http\Request;

class ModulesController extends Controller
{
    public function getModules(){
        $modules = Module::all();
        return $modules;
    }
}
