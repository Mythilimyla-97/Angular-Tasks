import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chain-pipe',
  templateUrl: './chain-pipe.component.html',
  styleUrls: ['./chain-pipe.component.scss']
})
export class ChainPipeComponent implements OnInit {

  todayDate :Date= new Date ();
  
  constructor() { }

  ngOnInit(): void {
  }

}
