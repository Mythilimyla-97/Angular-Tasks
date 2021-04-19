import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html',
  styleUrls: ['./built-in.component.scss']
})
export class BuiltInComponent implements OnInit {

  todayDate :Date= new Date ();
  currency="200"
  constructor() { }

  ngOnInit(): void {
  }

  employees: object[] = [
    {
      empId: 1,
      name: "Ram",
      location: "Bangalore"
    },
    {
      empId: 2,
      name: "Raj",
      location: "Chennai"
    },
    {
      empId: 3,
      name: "Vinay",
      location: "Pune"
    }
  ];

}
