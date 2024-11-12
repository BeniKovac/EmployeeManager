<?php

namespace App\Services;

use App\Models\Employee;
use Carbon\Carbon;

class EmployeeService
{
    public function averageEmploymentTime()
    {
        $employees = Employee::cursor();
        $now = Carbon::now();
        $total_employment_days = 0;
        foreach ($employees as $employee) {
            $employmentDate = Carbon::parse($employee->employment_date);
            $total_employment_days += $employmentDate->diffInDays($now);
        }
        return round(($total_employment_days / $employees->count()), 2);
    }

    public function getEmployees()
    {
        return Employee::basicInfo()->get();
    }

    public function getRecentEmployees()
    {
        return Employee::basicInfo()->where('employment_date', '>', Carbon::now()->subMonths(3))->get();
    }

    public function totalThisMonth()
    {
        return Employee::where('employment_date', '>', Carbon::now()->subMonths(1))->count();
    }
}
