import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../../Interfaces/task.interface';
import { TaskListServiceService } from '../../services/task-list-service.service';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { ModifyTaskDialogComponent } from '../modify-task-dialog/modify-task-dialog.component';
import { EraseTaskDialogComponent } from '../erase-task-dialog/erase-task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    SingleTaskComponent],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {

  @Input()
  public task?:Task;

  constructor(public dialog:MatDialog,public taskservice:TaskListServiceService){}

  switchTaskState(id:string){
    this.taskservice.swapTakState(id);
  }

  openEditDialog(id:string):void{
    let editingTask:Task = this.taskservice.getTask(id)!;
    this.dialog.open(ModifyTaskDialogComponent,{
      width:'50vw',
      data:{
        task:editingTask
      }
    })
  }

  openDeleteDialog(id:string):void{
    this.dialog.open(EraseTaskDialogComponent,{
      width:'50vw',
      data:{
        id:id
      }
    })
  }

}
