<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', ['recentEmployees' => Employee::all()]);
    }
}
