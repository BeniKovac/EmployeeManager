<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function update(Request $request, Department $employee)
    {
        $employee->update($request->validated());
        return redirect()->back()->with('success', 'Department updated successfully');
    }

    public function destroy(Department $department)
    {
        $department->delete();
        return response()->json(['message' => 'Department ' . strval($department->id) . ' deleted successfully']);
    }
}
