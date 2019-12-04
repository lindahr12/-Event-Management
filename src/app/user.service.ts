import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  header : HttpHeaders;
  private userid: any;
  constructor(public http : HttpClient ) {
    this.header = new HttpHeaders();
    this.header = this.header.append('Content-Type','application/json');
    this.header = this.header.append('Accept','application/json');

  }
  all()
  {
    let url = '/event/user/_search';
    return this.http.get(url, {headers: this.header});
  }
  add(user)
  {
    let url='/event/user/';
    return this.http.post(url, {"name":user.name,"username":user.username, "email":user.email,"password":user.password});

  }
  getid(userid)
  {
    let url = '/event/user/'+userid;
    return this.http.get(url, {headers: this.header});
  }
  update(userid,user)
  {
    let url='/event/user/'+userid;
    return this.http.post(url,user);
  }

  remove(userid) {
    let url='/event/user/'+userid;
    return this.http.delete(url);
  }

  login(user){
    let url = '/event/user/_search';
    let body=
        { 'query': {
            'bool': {
              'must': [
                {'match': {'email': user.email}},
                {'match': {'password': user.password}}
              ]
            }
          }
        };
    return this.http.post(url, body, {headers: this.header});

  }
}
