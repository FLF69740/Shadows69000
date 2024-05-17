import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  signature : string = "@SHADOWS69000"

  constructor(private router: Router) {}

  @Input('formmail') buttonText!: String;

  public onClickMailForm(){    
    if (this.buttonText === "CONTACT") {
      this.router.navigateByUrl('mailform');
    } else {
      this.router.navigateByUrl('');
    }      
    
  }

  

}
