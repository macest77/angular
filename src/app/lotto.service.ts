import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LottoService {

    private lottoUrl = 'https://www.lotto.pl/lotto';  // URL to web api
    
  constructor(
      private http: HttpClient) { }
      
    /** GET heroes from the server */
    getLotto() {
        this.http.get(this.lottoUrl, httpOptions)
   .subscribe(data => {console.log(data)});
      return this.http.get(this.lottoUrl, httpOptions)
    }
}
