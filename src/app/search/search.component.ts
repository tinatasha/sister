import { Component, OnInit ,Input} from '@angular/core';
import{Users} from '../users';
import {HTTPService} from '../http.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Repositories } from '../repositories';
// import{Dataservice} from '../http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
}) 
export class SearchComponent implements OnInit {
  profile:any=[];
  repos:any=[];
  username:string;

  constructor(public httpservice:HTTPService) { 
    // this.httpservice.getusers().subscribe(users =>{
    //   this.users = this.users
    //   console.log(this.users);
    }
    // this.httpservice.getrepos().subscribe(repositories =>{
    //   this.repositories = repositories;
    //   console.log(this.repositories);
    // })
    findProfile(){
      this.httpservice.updateprofile(this.username);
      this.httpservice.getusers().subscribe(profile =>{
        console.log(profile);
        this.profile = profile;
      });
      this.httpservice.getrepos().subscribe(repos =>{
        console.log(repos);
        this.repos = repos;
      })
    }
    // searchprofile(){
    //   this.httpservice.updateprofile(this.profile)
    //   console.log(this.profile)
    // }
   

  ngOnInit() {
  }

}
