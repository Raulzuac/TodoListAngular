import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { TaskListServiceService } from '../../services/task-list-service.service';
import { Task } from '../../../Interfaces/task.interface';
import { SingleTaskComponent } from '../single-task/single-task.component';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule,
    MatListModule
    ,MatDividerModule
    ,MatButtonModule,
    SingleTaskComponent,
    ],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'

})
export class TasklistComponent {

  @Input()
  public tasks:Task[]=[];

  @Input()
  completedTasks:Task[] = [];
  constructor(private taskController:TaskListServiceService){}


}


