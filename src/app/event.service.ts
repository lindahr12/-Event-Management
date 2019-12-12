import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  header : HttpHeaders;
  private userid: any;
  constructor(public http : HttpClient ) {
    this.header = new HttpHeaders();
    this.header = this.header.append('Content-Type','application/json');
    this.header = this.header.append('Accept','application/json');

  }
  all()
  {
    let url = '/eventinfo/event/_search';
    return this.http.get(url, {headers: this.header});
  }

  addevent(event)
  {
    let url='/eventinfo/event';
    return this.http.post(url, {"name":event.name,"description":event.description,"date":event.date,"organizer":event.organizer,"email_event":event.email_event,"phonenumber":event.phonenumber});

  }
  getid(eventid)
  {
    let url = '/eventinfo/event/'+eventid;
    return this.http.get(url, {headers: this.header});
  }
  update(eventid,event)
  {
    let url='/eventinfo/event/'+eventid;
    return this.http.post(url,event);
  }

  remove(eventid) {
    let url='/eventinfo/event/'+eventid;
    return this.http.delete(url);
  }


}
