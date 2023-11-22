import { Component } from '@angular/core';
import { TaskListServiceService } from '../../../tasks/services/task-list-service.service';
import { appname } from '../../assets/assets';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public taskService:TaskListServiceService){}

  tittle:string = appname;

}
