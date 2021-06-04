import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {

    private _jsonURL = 'assets/default.json';
    defaultData: Object;
    
  constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
        console.log(data);
        this.defaultData = data;
       });
    }
    public getJSON(): Observable<any> {
       return this.http.get(this._jsonURL);
     }

  ngOnInit(): void {
  }

}
