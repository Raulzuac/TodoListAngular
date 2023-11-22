import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TaskListServiceService } from '../../services/task-list-service.service';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar'
import { SnackBarComponent } from '../../../shared/components/snack-bar/snack-bar.component';
import { EraseTaskDialogComponent } from '../erase-task-dialog/erase-task-dialog.component';

@Component({
  selector: 'task-input',
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css',
  standalone:true,
  imports:[
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule
  ]
})
export class TaskInputComponent {

  constructor(public taskService:TaskListServiceService,
    private _snackbar:MatSnackBar){}

  value=""
  desc=""

  pushTask(){
    if(!this.value || !this.desc)return;
    this.taskService.addTask(this.value,this.desc);
    this.value="";
    this.desc="";
  }

  openSnackbar(text:string):void{
    this._snackbar.openFromComponent(SnackBarComponent,{
      duration: 5000,
      data: text
    })
  }

  clearTasks(){
    const numTasksBefore = this.taskService.countTasks();
    this.taskService.cleanupTasks();
    const numtasksAfter = this.taskService.countTasks();

    if(numTasksBefore !== numtasksAfter){
      this.createAlert('Completed tasks cleared');
    }
  }

  cleanTasks(){
    const numTasksBefore = this.taskService.countTasks();
    this.taskService.deleteTasks()
    const numtasksAfter = this.taskService.countTasks();
    console.log({numTasksBefore},{numtasksAfter});

    if(numTasksBefore !== numtasksAfter){
      this.createAlert('All tasks cleared');
    }
  }


  createAlert(text:string) {
    const alertBox = document.createElement("div");
  alertBox.style.backgroundColor = "black";
  alertBox.style.color = "white";
  alertBox.style.padding = "10px";
  alertBox.style.position = "fixed";
  alertBox.style.top = "85%";
  alertBox.style.left = "85%";
  alertBox.style.transform = "translate(-50%, -50%)";
  alertBox.style.borderRadius = "5px";
  alertBox.style.boxShadow = "0px 0px 10px 0px rgba(0, 0, 0, 0.75)";
  alertBox.innerHTML = text;
  document.body.appendChild(alertBox);
  setTimeout(() => {
    alertBox.style.transition = "opacity 1s, height 1s, width 1s";
    alertBox.style.opacity = "0";
    setTimeout(() => {
      alertBox.remove();
    }, 1000);
  }, 1000);
  }


}
