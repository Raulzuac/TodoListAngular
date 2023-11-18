import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import {MatIconModule} from '@angular/material/icon'

import {MatGridListModule} from '@angular/material/grid-list';
import { TasksModule } from './tasks/tasks.module';
import { MainComponent } from './tasks/components/pages/main/main.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
     RouterOutlet,
     SharedModule,
    MatIconModule,
    MatGridListModule,
    TasksModule,
    MainComponent
    // BrowserAnimationsModule
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
}
