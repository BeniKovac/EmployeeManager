<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PositionFactory extends Factory
{
    public function definition(): array
    {
        return [
            'position_title' => fake()->jobTitle, // Generates random job titles
        ];
    }
}
