import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {

buttonName = 'Show';
show = true;
//hide:any;

fruits = [
  {name:'apple'},
  {name:'mango'},
  {name:'banana'},
  {name:'Guava'},
  {name:'Orange'},
]

ngSwitch="5"

  constructor() { }

  ngOnInit(): void {
  }
clickme(){
  this.show = !this.show
  if(this.show)
  this.buttonName = 'Hide'
  else
  this.buttonName = 'Show'
  }
}
