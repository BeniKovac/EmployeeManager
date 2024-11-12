<?php

namespace App\Http\Controllers;

use App\Services\DepartmentService;
use App\Services\EmployeeService;
use App\Services\PositionService;
use Inertia\Inertia;

class HomeController extends Controller
{

    protected DepartmentService $department_service;
    protected EmployeeService $employee_service;
    protected PositionService $position_service;

    public function __construct(EmployeeService $employee_service, DepartmentService $department_service, PositionService $position_service)
    {
        $this->department_service = $department_service;
        $this->employee_service = $employee_service;
        $this->position_service = $position_service;
    }

    public function index()
    {
        return Inertia::render('Home', [
            'departments' => $this->department_service->getDepartments(),
            'employees' => $this->employee_service->getEmployees(),
            'positions' => $this->position_service->getPositions(),
            'recentEmployees' => $this->employee_service->getRecentEmployees(),
            'totalThisMonthEmployees' => $this->employee_service->totalThisMonth(),
            'averageEmploymentTime' => $this->employee_service->averageEmploymentTime()
        ]);
    }
}
