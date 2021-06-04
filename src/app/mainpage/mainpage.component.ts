import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.less']
})
export class MainpageComponent implements OnInit {

  private _jsonURL = 'assets/mainpage.json';
    mainpageData: Object;
    
  constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
        console.log(data);
        this.mainpageData = data;
       });
    }
    public getJSON(): Observable<any> {
       return this.http.get(this._jsonURL);
     }

  ngOnInit(): void {
  }

}
