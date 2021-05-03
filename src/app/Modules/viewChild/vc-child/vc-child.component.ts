import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vc-child',
  templateUrl: './vc-child.component.html',
  styleUrls: ['./vc-child.component.scss']
})
export class VcChildComponent implements OnInit {

  visible: boolean =  true;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
    this.visible = !this.visible;
  }

}
