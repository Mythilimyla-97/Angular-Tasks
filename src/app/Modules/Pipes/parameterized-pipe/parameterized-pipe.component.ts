import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameterized-pipe',
  templateUrl: './parameterized-pipe.component.html',
  styleUrls: ['./parameterized-pipe.component.scss']
})
export class ParameterizedPipeComponent implements OnInit {

  Date :Date=new  Date ("07/06/2021");

  constructor() { }

  ngOnInit(): void {
  }

}
