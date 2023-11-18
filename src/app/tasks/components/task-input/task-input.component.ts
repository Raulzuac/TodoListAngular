import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TaskListServiceService } from '../../services/task-list-service.service';

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
    MatInputModule
  ]
})
export class TaskInputComponent {

  constructor(public taskService:TaskListServiceService){}

  value=""

  pushTask(){
    if(!this.value)return;
    this.taskService.addTask(this.value);
    this.value="";
  }
}
