import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  userForm: FormGroup | any;
  loginForm:FormGroup | any;
  
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.userForm = this.fb.group({
    //   userid: ['', 
    //     Validators.required, 
    //   ],
    //   firstName: ['', Validators.required],
    // })
    this.getLoginForm()
  }

  getLoginForm(){
    this.loginForm = this.fb.group({
     emailId:new FormControl(null,Validators.required),
     password:new FormControl(null,Validators.required),
    })
  }
  onSubmit(){
    debugger
  
      console.log(this.loginForm.value)
  
  }
  get f() { return this.userForm.controls; }

    // onSubmit() {
    //     this.userForm = true;

    //     // stop here if form is invalid
    //     if (this.userForm.invalid) {
    //         return;
    //     }

    //     // display form values on success
    //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4));
    // }


}
