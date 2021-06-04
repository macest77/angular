import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stal',
  templateUrl: './stal.component.html',
  styleUrls: ['./stal.component.less']
})
export class StalComponent implements OnInit {

  private _jsonURL = 'assets/stal.json';
    stalData: Object;
    
  constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
        console.log(data);
        this.stalData = data;
       });
    }
    public getJSON(): Observable<any> {
       return this.http.get(this._jsonURL);
     }

  ngOnInit(): void {
  }

}
