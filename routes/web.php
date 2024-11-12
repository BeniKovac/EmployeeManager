<?php

use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/getEmployees', [EmployeeController::class, 'getEmployees'])->name('employees.get');
Route::put('/employees/{id}', [EmployeeController::class, 'update'])->name('employees.update');

Route::get('/getDepartments', [DepartmentController::class, 'getDepartments'])->name('departments.get');
Route::put('/departments/{id}', [DepartmentController::class, 'update'])->name('departments.update');


Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware(['auth'])->name('home');

require __DIR__ . '/auth.php';
