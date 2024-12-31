import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-mobileinput',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './mobileinput.component.html',
  styleUrl: './mobileinput.component.css'
})
export class MobileinputComponent implements OnInit {
  signInForm ! : FormGroup;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      mobileno:['',[Validators.required,Validators.minLength(10),this.onlyNumber()]],
      email:['',[Validators.required,Validators.email]],
      proofType : ['',[Validators.required]]
    })
  }
  submitForm(){
    if(this.signInForm.valid){  
      console.log(this.signInForm.value)
      console.log('first_branch')
    }
  }
  onlyNumber():ValidatorFn{
    return (control:AbstractControl)=>{
      let value = control.value.trim();
      if(value && !(/^[0-9]+$/.test(value))){
        return {error: 'Only number allowed'}
      }
      return null
    }
  }
  finalMaskedValue !: string; 
  requiredValue : string = '';
  maskContent(event:any){
    let value = event.target.value;
    let maskedValue = '';
    if(event.inputType == 'deleteContentBackward' || value == ''){
      this.requiredValue = this.requiredValue.slice(0,this.requiredValue.length-1);
      this.signInForm.get('proofType')?.patchValue(this.requiredValue);
      return;
    } 
    if(value.length < 8){
      maskedValue += '*'.repeat(value.length);
      this.finalMaskedValue = maskedValue;
      this.requiredValue += event.data; 
      this.signInForm.get('proofType')?.patchValue(this.requiredValue);
      return;
    }
    maskedValue += '*'.repeat(8);
    this.finalMaskedValue = maskedValue + event.target.value.slice(8,);
    this.requiredValue += event.data;
    this.signInForm.get('proofType')?.patchValue(this.requiredValue);
  }
}
