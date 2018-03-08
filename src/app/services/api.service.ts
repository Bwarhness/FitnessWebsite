import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ApiService {
  Token:any = "";
  Api = "http://fitnessapi.webdesk-dev.dk"
  constructor(public http: HttpClient) { }
  generateHTTPPost(endpoint, body){
    var reqHeader = new HttpHeaders({'Authorization':'Bearer ' + this.Token})

    return this.http.post(this.Api + endpoint, body, {headers:reqHeader})
  }
  generateHTTPPut(endpoint, body){
    var reqHeader = new HttpHeaders({'Authorization':'Bearer ' + this.Token})

    return this.http.put(this.Api + endpoint, body, {headers:reqHeader})
  }
  generateHTTPGet(endpoint){
    var reqHeader = new HttpHeaders({'Authorization':'Bearer ' + this.Token})

    return this.http.get(this.Api + endpoint, {headers:reqHeader})
  } 
}
