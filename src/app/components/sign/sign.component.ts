import { Component } from '@angular/core';
import { MobileinputComponent } from './mobileinput/mobileinput.component';
import { OtpComponent } from './otp/otp.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [MobileinputComponent,OtpComponent, CommonModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {

  mobileinput!:string  ;
  ngOnInit(){
    this.mobileinput = ''; 
  }
}
