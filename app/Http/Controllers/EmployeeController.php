<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{

    public function store(Request $request)
    {
        $employee = Employee::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'department_id' => $request->department_id,
            'position_id' => $request->position_id,
            'employment_date' => $request->employment_date
        ]);

        $created_employee = Employee::with(['department', 'position'])->find($employee->id);

        return response()->json([
            'message' => 'Employee created successfully!',
            'employee' => $created_employee,
        ]);
    }

    public function update(Request $request, Employee $employee)
    {
        $employee->update($request->validated());
        return redirect()->back()->with('success', 'Employee updated successfully');
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();
        return response()->json(['message' => 'Employee ' . strval($employee->id) . ' deleted successfully']);
    }
}
