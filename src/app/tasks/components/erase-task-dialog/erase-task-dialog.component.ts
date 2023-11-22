import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaskListServiceService } from '../../services/task-list-service.service';
import { Task } from '../../../Interfaces/task.interface';

@Component({
  selector: 'app-erase-task-dialog',
  templateUrl: './erase-task-dialog.component.html',
  styleUrl: './erase-task-dialog.component.css'
})
export class EraseTaskDialogComponent {

  constructor(public dialogRef: MatDialogRef<EraseTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{id:string},
    public taskService:TaskListServiceService){}


  deleteTask(id:string){
    this.taskService.deleteTask(id);
  }
}
