import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  disable:boolean=true;
  source="/assets/pagenotfound.jpg";
  w="200";
  h="200";
  constructor() { }

  ngOnInit(): void {
  }

}
