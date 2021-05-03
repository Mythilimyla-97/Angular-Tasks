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
  {name:'apple'},
  {name:'mango'},
  {name:'banana'},
  {name:'Guava'},
  {name:'Orange'},
]

case="10"

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
