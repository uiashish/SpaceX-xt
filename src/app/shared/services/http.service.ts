import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  baseUrl = environment.apiURL;

  constructor(private http:HttpClient) { } 

  get(url, payload: any = null, options:any = {}): Observable<any> {
    let params = new URLSearchParams();
	
    if (payload) {
      for (let key in payload) {
        if ('' !== payload[key] && null !== payload[key]) {
          params.set(key, payload[key])
        }
      }
    }
    return this.http.get(this.baseUrl + url + '?' + params.toString(), options);
  }

}
