import { Component, OnInit } from '@angular/core';
import polonia from '../../assets/polonia.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-polonia',
  templateUrl: './polonia.component.html',
  styleUrls: ['./polonia.component.less']
})
export class PoloniaComponent implements OnInit {

    private _jsonURL = 'assets/polonia.json';
    poloniaData: Object;
    
  constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
        console.log(data);
        this.poloniaData = data;
       });
    }
    public getJSON(): Observable<any> {
       return this.http.get(this._jsonURL);
     }

  ngOnInit(): void {
    //  this.poloniaData = JSON.parse(polonia);//polonia.json().results;
  }

}
