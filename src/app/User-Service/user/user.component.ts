import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/Service/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user:any[] | any;
  users:any[] | any;
  // [
  //   {id:1,name:'Mythili',designation:'Angular Developer',city:'Sivakasi',mobile:9876543210},
  //   {id:1,name:'Priya',designation:'PHP Developer',city:'Madurai',mobile:9876543210},
  //   {id:1,name:'Kavitha',designation:'Java Developer',city:'Chennai',mobile:9876543210},
  //   {id:1,name:'Roshini',designation:'Angular JS Developer',city:'Nellai',mobile:9876543210},
  //   {id:1,name:'Sandhya',designation:'Dot Net Developer',city:'Coimbatore',mobile:9876543210},
  // ]
  constructor(private service:UserserviceService,
    public activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.service.getAllUsers();
    this.users = this.service.getAll();
    let id = this.activateroute.snapshot.params['id'];

    this.service.getUser(id).subscribe((user)=>{
      console.log(user);
    })
  }
}