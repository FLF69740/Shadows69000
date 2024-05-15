import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mail-form.component.html',
  styleUrl: './mail-form.component.scss'
})
export class MailFormComponent implements OnInit{

  textExplication1: String = "Hello Capsulier,";
  textExplication2: String = "This form page will allow you to obtain the password for the home page"
  + " which will be sent to your mailbox with the address you have entered below.";
  textExplication3: String = "For security reasons :";
  textExplication4: String = "The Key field is the key that was sent to you in your eve online messaging."
  + " This way, you will immediately be identified by your avatar.";
  textExplication5: String = "The last validation step will be a confirmation of the request on the corporate or alliance channels in eve online."
  textExplication6: String = "Fly safe!";

  constructor(private router: Router){}

  email!: String;
  key!: String;

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.email + " - " + this.key);
    this.router.navigateByUrl('');
  }

  
}
