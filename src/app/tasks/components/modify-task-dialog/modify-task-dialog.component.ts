import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaskListServiceService } from '../../services/task-list-service.service';
import { Task } from '../../../Interfaces/task.interface';

@Component({
  selector: 'app-modify-task-dialog',
  templateUrl: './modify-task-dialog.component.html',
  styleUrl: './modify-task-dialog.component.css',
})
export class ModifyTaskDialogComponent {


constructor(public dialogRef: MatDialogRef<ModifyTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{task:Task},
    public taskService:TaskListServiceService){}



    modifyTask(id: string) {
      if((<HTMLInputElement>document.getElementById('modifyInput')!).value==="")return;
      this.taskService.modifyTask(id,
        (<HTMLInputElement>document.getElementById('modifyInput')!).value??this.data.task.taskName,
        (<HTMLInputElement>document.getElementById('descInput')!).value??this.data.task.description,
        );
    }

}
