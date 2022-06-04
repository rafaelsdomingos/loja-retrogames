import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = "https://sheetdb.io/api/v1/kbg5ndzxiwc6x";

  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getGame(){
    return this.httpClient.get(this.url);
  }

}
