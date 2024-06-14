import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreModule } from '../../../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from '../../../core/services/request.service';

@Component({
  selector: 'app-password-area-landing',
  standalone: true,
  imports: [
    FormsModule,
    CoreModule,
    HttpClientModule
  ],
  templateUrl: './password-area-landing.component.html',
  styleUrl: './password-area-landing.component.scss'
})
export class PasswordAreaLandingComponent {

  public constructor(
    private router: Router, 
    private req: RequestService
  ){}

  email!: String;
  password!: String;

  token$!: Observable<String>;

  public onPasswordSubmit() {
    console.log("CLICK !!! " + this.email + " - " + this.password);
    if (this.email != null && this.email != "") {
      this.req.getJwtToken(this.email, this.password).subscribe(
      data => {
        if (data != null) {
          this.req.setToken(data);
          this.router.navigateByUrl('welcome');
        }
      }
    );
    } else {
      this.req.getEveChar().subscribe(
        data => console.log(data)
      );
    }
  }

}
