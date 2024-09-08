import { Component } from '@angular/core';
import { min } from 'rxjs';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {
  Intervals:any = {};
  timerValues:any = { 1: 12, 2: 12 }; 
  isRunning:any = {1:false, 2:false}
  constructor(){}
  ngOnInit(){
      this.startTimer(1);
      this.startTimer(2);
    }
  startTimer(timerId:any){
    if(this.isRunning[timerId]){
      return
    }
    this.isRunning[timerId] = true;
    this.Intervals[timerId] = setInterval(() => {
      this.timerValues[timerId]--
      let element = document.getElementById(`${timerId}`) as HTMLElement 
      element.innerText = `00 : ${this.timerValues[timerId].toString().padStart(2,'0')}`
      if(this.timerValues[timerId] == 0){
        clearInterval(this.Intervals[timerId])
        this.isRunning[timerId] = false;
        this.timerValues[timerId] = 12;
      }
    }, 1000);
  }
}
