import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailFormComponent } from './components/mail-form/mail-form.component';
import { RouterModule, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MailFormComponent
  ],
  exports: [
    MailFormComponent
  ]
})
export class ContactModule { }
