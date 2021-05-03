import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.scss']
})
export class OutputParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(data:any){
    console.log(data);
    alert("Alert Message" +data)
  }

}
