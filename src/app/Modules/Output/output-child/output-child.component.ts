import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent implements OnInit {

  @Output() submit = new EventEmitter<any>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.submit.emit('SUBMIT FROM CHILD')
  }


}
