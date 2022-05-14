import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { canComponentLeave } from '../unsave.guard';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, canComponentLeave {

  userName : FormControl = new FormControl();
  constructor() { }
  canLeave(): boolean{
    if(this.userName.dirty){
      return window.confirm("You have some unsaved changes")
    }
    return true;
  }

  ngOnInit(): void {
  }

}
