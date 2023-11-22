import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/pages/main/main.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ModifyTaskDialogComponent } from './components/modify-task-dialog/modify-task-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EraseTaskDialogComponent } from './components/erase-task-dialog/erase-task-dialog.component';



@NgModule({
  declarations: [

    ModifyTaskDialogComponent,
    EraseTaskDialogComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MainComponent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatTooltipModule
  ],
  exports:[

  ]

})
export class TasksModule { }
