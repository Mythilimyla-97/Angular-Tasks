import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise-observable',
  templateUrl: './promise-observable.component.html',
  styleUrls: ['./promise-observable.component.scss']
})
export class PromiseObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const promise = new Promise(resolve =>{
      console.log("Promise Call");
      setTimeout(()=>{
        resolve("Promise Working")
      },1000)
    })
    // promise.then(result => console.log(result))

    //Observable
    const observable = new Observable(data =>{
      console.log("Observable Call");
      setTimeout(() => {
        data.next("observable Working");
      }, 1000);
    })
    // observable.subscribe(result => console.log(result))
  }




}
