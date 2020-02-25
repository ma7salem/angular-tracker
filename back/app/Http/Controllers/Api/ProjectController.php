<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Project;
class ProjectController extends Controller
{
    public function index()
    {
        return response()->json(['projects' => Project::with('tasks')->orderBy('id', 'desc')->get()]);
    }

    public function store(Request $request)
    {
        return $request->all();
    }
}
