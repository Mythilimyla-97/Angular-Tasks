import { Component, OnInit, ViewChild } from '@angular/core';
import { VcChildComponent } from '../vc-child/vc-child.component';

@Component({
  selector: 'app-vc-parent',
  templateUrl: './vc-parent.component.html',
  styleUrls: ['./vc-parent.component.scss']
})
export class VcParentComponent implements OnInit {

  @ViewChild(VcChildComponent) child!: VcChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  changeEvent(){
   this.child.changeColor();
  }

}
