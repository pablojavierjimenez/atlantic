import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleButtonComponent } from './components/simple-button/simple-button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    SimpleButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    SimpleButtonComponent,
    RouterModule
  ]
})
export class SharedModule { }
