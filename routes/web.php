<?php

use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\HomeController;
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

Route::delete('/employees/{employee}', [EmployeeController::class, 'destroy'])->name('employees.delete');
Route::post('/employees', [EmployeeController::class, 'store'])->name('employees.create');
Route::put('/employees/{employee}', [EmployeeController::class, 'update'])->name('employees.update');

Route::delete('/departments/{department}', [DepartmentController::class, 'destroy'])->name('departments.delete');
Route::put('/departments/{department}', [DepartmentController::class, 'update'])->name('departments.update');


Route::get('/home', [HomeController::class, 'index'])->middleware(['auth'])->name('home');

require __DIR__ . '/auth.php';
