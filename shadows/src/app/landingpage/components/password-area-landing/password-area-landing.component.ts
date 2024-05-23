import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-area-landing',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-area-landing.component.html',
  styleUrl: './password-area-landing.component.scss'
})
export class PasswordAreaLandingComponent {

  public constructor(private router: Router){}

  email!: String;
  password!: String;

  public onPasswordSubmit() {
    console.log("CLICK !!! " + this.email + " - " + this.password);
    this.router.navigateByUrl('welcome');
  }

}
