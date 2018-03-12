import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ApiService {
  Token: any = '';
  Api = 'http://www.fitnessapi.webdesk-dev.dk'; 
  // Api = 'http://localhost:50590';
  

  constructor(public http: HttpClient) { }
  generateHTTPPost(endpoint, body) {
    console.log(this.Token)
    const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.Token});
    return this.http.post(this.Api + endpoint, body,{headers:reqHeader});
  }
  generateHTTPPut(endpoint, body) {
    const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.Token});

    return this.http.put(this.Api + endpoint, body, {headers: reqHeader});
  }
  generateHTTPGet(endpoint) {
    const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + this.Token});

    return this.http.get(this.Api + endpoint, {headers: reqHeader});
  }
}
