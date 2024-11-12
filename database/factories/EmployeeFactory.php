<?php

namespace Database\Factories;

use App\Models\Position;
use App\Models\Department;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->firstName,
            'surname' => fake()->lastName,
            'position_id' => Position::factory(),
            'department_id' => Department::factory(),
            'employment_date' => fake()->dateTimeThisYear()
        ];
    }
}
