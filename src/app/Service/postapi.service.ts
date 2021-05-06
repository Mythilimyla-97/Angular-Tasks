import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostapiService {

  constructor(private http:HttpClient) { }

  getAllPostApi(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments")
  }
  getAllwithParams(){
    let params=new HttpParams().set('postId','1');
    return this.http.get("https://jsonplaceholder.typicode.com/comments",{params:params});
  }
  postAll(params: any){
    return this.http.post("https://jsonplaceholder.typicode.com/posts",params);
  }
    
}
