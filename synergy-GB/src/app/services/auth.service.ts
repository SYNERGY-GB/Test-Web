import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpHeaders  = new HttpHeaders ({'Content-Type': 'application/json'})

  private Url_Back = 'https://prueba-admision-web.herokuapp.com/session';

  constructor(private http: HttpClient) { }

  postLogin(dataLogin): Observable<any> {
    return this.http.post(this.Url_Back , dataLogin, { headers: this.httpHeaders });
  }

  timeLine():  Observable<any>{
    return this.http.get('https://prueba-admision-web.herokuapp.com/data?cid=k6lj87hj8');
  }
}
