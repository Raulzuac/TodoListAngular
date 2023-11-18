import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';

import {MatListModule} from '@angular/material/list';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ModifyTaskDialogComponent } from '../modify-task-dialog/modify-task-dialog.component';
import { TaskListServiceService } from '../../services/task-list-service.service';
import { Task } from '../../../Interfaces/task.interface';


@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule,
    MatListModule
    ,MatDividerModule
    ,MatButtonModule,
    ],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {

  tasks:Task[] = this.taskController._tasks;
  completedTasks:Task[] = this.taskController.getCompletedTasks;
  constructor(public dialog:MatDialog,private taskController:TaskListServiceService){}

  switchTaskState(id:string){
    this.taskController.swapTakState(id);
  }

  openDialog():void{
    console.log('se debería de abrir');

    this.dialog.open(ModifyTaskDialogComponent,{
      width:'50vw'
    })
  }
}


