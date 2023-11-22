import { Component } from '@angular/core';
import { TasklistComponent } from '../../tasklist/tasklist.component';
import { MatGridList,MatGridListModule,MatGridTile } from '@angular/material/grid-list';
import { TaskInputComponent } from '../../task-input/task-input.component';
import { TaskListServiceService } from '../../../services/task-list-service.service';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'main-page',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone:true,
  imports:[
    TasklistComponent,
    MatGridListModule,
    TaskInputComponent,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
  ]
})
export class MainComponent {

  constructor(public taskService:TaskListServiceService){}

}
