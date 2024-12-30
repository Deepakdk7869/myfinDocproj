import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobileinput',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './mobileinput.component.html',
  styleUrl: './mobileinput.component.css'
})
export class MobileinputComponent implements OnInit {
  signInForm ! : FormGroup;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      mobileno:['',[Validators.required,Validators.minLength(10),this.onlyNumber()]],
      email:['',[Validators.required,Validators.email]]
    })
  }
  submitForm(){
    if(this.signInForm.valid){  
      console.log(this.signInForm.value)
    }
  }
  onlyNumber():ValidatorFn{
    return (control:AbstractControl)=>{
      let value = control.value.trim();
      if(!(/^[0-9]+$/.test(value))){
        return {error: 'Only number allowed'}
      }
      return null
    }
  }
}
