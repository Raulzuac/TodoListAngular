import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MatIconModule} from '@angular/material/icon'
import {MatTooltipModule} from '@angular/material/tooltip';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
