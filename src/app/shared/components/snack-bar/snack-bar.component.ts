import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  standalone: true,
  imports: [CommonModule,MatSnackBarLabel],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.css',
})
export class SnackBarComponent {

}
