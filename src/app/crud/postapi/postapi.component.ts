import { HttpParams } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PostapiService } from 'src/app/Service/postapi.service';

@Component({
  selector: 'app-postapi',
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.scss']
})
export class PostapiComponent implements OnInit {

  post:any[] | any;
  postbyId:any[] | any;
  postData:any[] |any;

  constructor(private service:PostapiService) { }

  ngOnInit(): void {
    this.getAllPost();
    this.getbyId();
    this.postAll();
  }

  getAllPost(){
    this.service.getAllPostApi().subscribe((data)=>{
      this.post=data;
    })
  }

  getbyId(){
    this.service.getAllwithParams().subscribe((data)=>{
      this.postbyId=data;
    })
  }

  postAll(){
    let params={
      id: 101,
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    this.service.postAll(params).subscribe((data)=>
    {
        this.postData=data;
    })
  }
  
}

