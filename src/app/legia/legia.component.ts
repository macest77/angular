import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-legia',
  templateUrl: './legia.component.html',
  styleUrls: ['./legia.component.less']
})
export class LegiaComponent implements OnInit {

  private _jsonURL = 'assets/legia.json';
    legiaData: Object;
    
  constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
        console.log(data);
        this.legiaData = data;
       });
    }
    public getJSON(): Observable<any> {
       return this.http.get(this._jsonURL);
     }

  ngOnInit(): void {
  }

}
