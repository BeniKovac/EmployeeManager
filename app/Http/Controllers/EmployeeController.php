<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Carbon\Carbon;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function update(Request $request, Employee $employee)
    {
        $employee->update($request->validated());
        return redirect()->back()->with('success', 'Employee updated successfully');
    }

    public function getEmployees()
    {
        return Employee::all();
    }

    public function getRecentEmployees()
    {
        return Employee::where('employment_date', '>', Carbon::now()->subMonths(3))->get();
    }
}
