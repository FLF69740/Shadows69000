import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EveCharacter } from '../model/EveCharacter.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient){}

  private token: String = "";

  getJwtToken(email: String, password: String) : Observable<String> {
    const credentials = this.getCredentials(email, password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${credentials}`
      }),
      responseType: 'text' as 'json'
    };
    console.log(httpOptions.headers);
    return this.http.get<String>('http://localhost:9000/login', httpOptions);
  }

  getEveChar(): Observable<EveCharacter[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    console.log(httpOptions.headers);
    return this.http.get<EveCharacter[]>('http://localhost:9000/evecharacters', httpOptions);
  }

  private getCredentials(email: String, password: String): String {
    return btoa(`${email}:${password}`);
  }

  setToken(token: String) {
    this.token = token;
  }
}
