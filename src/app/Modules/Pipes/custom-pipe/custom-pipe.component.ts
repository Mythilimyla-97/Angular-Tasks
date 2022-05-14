import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {

  employees: any[] = [
    {
      empId: 1,
      name: "Ram",
      location: "Bangalore",
      dob: new Date("o5/10/1989")
    },
    {
      empId: 2,
      name: "Raj",
      location: "Chennai",
      dob: new Date("o5/10/1994")
    },
    {
      empId: 3,
      name: "Vinay",
      location: "Pune",
      dob: new Date("o5/10/2000")
    }
  ];


  
  dob= new Date("05/10/2012")


  constructor() { }

  ngOnInit(): void {
    this.display()
  }
  display(){
      alert("Opened");
  }
}
