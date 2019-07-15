import { Injectable ,Input} from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  private  username :string;
  private clientid ='cf5db35af0bb82599134';
  private clientsecret='f8126beabd055177a23ad2bd939d5a886d10b790';

  constructor(private http:Http) {
    console.log('service is okay');
    this.username = 'Daneden';
    
  }

  getusers(){
    return this.http.get(" https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" +this.clientsecret)
    .pipe(map(res =>res.json()));
  }
  getrepos(){
    return this.http.get(" https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" +this.clientsecret)
    .pipe(map(res =>res.json()));

  }
  updateprofile(username:string){
    this.username = username;

  }
}
