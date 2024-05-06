import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  signature : string = "@SHADOWS69000"

  buttonText: string = "CONTACT";

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  public onClickMailForm(){
    if (this.buttonText === "CONTACT") {
      this.buttonText = "BACK";
      this.router.navigateByUrl('mailform');
    } else {
      this.buttonText = "CONTACT";
      this.router.navigateByUrl('');
    }
      
    
    
  }

  

}
