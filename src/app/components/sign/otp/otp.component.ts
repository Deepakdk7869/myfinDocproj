import { Component } from '@angular/core';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {
  time1!:string;
  time2!:string;
  interval: any;
  constructor(){}
  ngOnInit(){

  }
  startTimer(time:string){}
  //   let sec = 30;
  //   let minut = 0;
  //   this.interval = setTimeout(() => {
  //     if(sec != 0){
  //       sec--
  //     }else if(sec == 0){
  //     clearInterval(this.interval)
  //     }
  //   }, 1000);
  // }
}
