import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {

buttonName = 'Show';
boolean = true;
//hide:any;

fruits = [
  {name:'apple', color:'red'},
  {name:'mango', color:'yellow'},
  {name:'banana', color:'yellow'},
  {name:'Guava', color:'green'},
  {name:'Orange', color:'orange'},
]

case="1";

  constructor() { }

  ngOnInit(): void {
  }
clickme(){
  this.boolean = !this.boolean
  if(this.boolean)
  this.buttonName = 'Hide'
  else
  this.buttonName = 'Show'
  }
}
