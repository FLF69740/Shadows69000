import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderAndFooterService } from '../../../core/services/header-and-footer.service';
import { RequestService } from '../../../core/services/request.service';
import { mCaptcha } from '../../../../environments/environments';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-mail-form',
  standalone: true,
  imports: [FormsModule, RecaptchaModule],
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

  sendingConfirmationTxt: String = "your email and key have been sent";
  sendingFailureTxt: String = "your key proposal is listed. Try again with a valid key.";

  captchaKey: String = mCaptcha.KEY_TO_READ;

  constructor(
    private service: HeaderAndFooterService,
    private req: RequestService,
  ){}



  email!: String;
  key!: String;
  sended: boolean = false;
  captchaValidation: boolean = false;
  keyPositiveAnswer: boolean = false; 

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.checkEmptyOrNull(this.email) == false && this.checkEmptyOrNull(this.key) == false) {
      console.log(this.email + " - " + this.key);
      
      this.service.title = "Autre Chose";
      this.req.sendEmail(this.key, this.email).subscribe(
        data => {
          if (data != null) {
            this.keyPositiveAnswer = true;
          };
          this.sended = true;
        } 
      )
    }

  }

  private checkEmptyOrNull(value: String): boolean {
    if (value == null || value == "") {
      return true;
    } else {
      return false;
    }
  }

  onCaptchaResolved(response: String | null) {
    if (response != null) {
      this.captchaValidation = true;
    }
  }

  
}
