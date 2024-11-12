<?php

namespace App\Http\Controllers;

use App\Services\DepartmentService;
use App\Services\EmployeeService;
use Inertia\Inertia;

class HomeController extends Controller
{

    protected EmployeeService $employee_service;
    protected DepartmentService $department_service;

    public function __construct(EmployeeService $employee_service, DepartmentService $department_service)
    {
        $this->department_service = $department_service;
        $this->employee_service = $employee_service;
    }

    public function index()
    {
        return Inertia::render('Home', [
            'departments' => $this->department_service->getDepartments(),
            'employees' => $this->employee_service->getEmployees(),
            'recentEmployees' => $this->employee_service->getRecentEmployees(),
            'totalThisMonthEmployees' => $this->employee_service->totalThisMonth(),
            'averageEmploymentTime' => $this->employee_service->averageEmploymentTime()
        ]);
    }
}
