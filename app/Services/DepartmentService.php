<?php

namespace App\Services;

use App\Models\Department;

class DepartmentService
{
    public function getDepartments()
    {
        return Department::all();
    }
}
