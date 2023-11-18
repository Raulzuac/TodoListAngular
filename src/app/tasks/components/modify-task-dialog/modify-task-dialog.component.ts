import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-task-dialog',
  templateUrl: './modify-task-dialog.component.html',
  styleUrl: './modify-task-dialog.component.css',
})
export class ModifyTaskDialogComponent {
  constructor(public dialogRef: MatDialogRef<ModifyTaskDialogComponent>){}
}
