import { Component } from '@angular/core';
import { TasklistComponent } from '../../tasklist/tasklist.component';
import { MatGridList,MatGridListModule,MatGridTile } from '@angular/material/grid-list';
import { TaskInputComponent } from '../../task-input/task-input.component';


@Component({
  selector: 'main-page',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone:true,
  imports:[
    TasklistComponent,
    MatGridListModule,
    TaskInputComponent
  ]
})
export class MainComponent {

}
