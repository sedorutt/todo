<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Seeder;

class TaskTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i=1;$i<=10;$i++){
            Task::create([
                'title'=>'todo'.$i,
                'content'=>'detail'.$i,
                'dead_line'=>'2021/8/6'
            ]);
        }
    }
}
