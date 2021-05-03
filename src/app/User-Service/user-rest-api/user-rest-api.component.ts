import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/Service/userservice.service';

@Component({
  selector: 'app-user-rest-api',
  templateUrl: './user-rest-api.component.html',
  styleUrls: ['./user-rest-api.component.scss']
})
export class UserRestAPIComponent implements OnInit {
  user:any[] | any;
 
  constructor(private service:UserserviceService) { }

  ngOnInit(): void {
    this.service.getUserApi().subscribe((data)=>{
      this.user=data;
      console.log(this.user);
    })
  }
}
