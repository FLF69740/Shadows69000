import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-area-landing',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-area-landing.component.html',
  styleUrl: './password-area-landing.component.scss'
})
export class PasswordAreaLandingComponent {

  email!: String;
  password!: String;

  public onPasswordSubmit() {
    console.log("CLICK !!! " + this.email + " - " + this.password);
  }

}
