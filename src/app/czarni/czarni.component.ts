import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-czarni',
  templateUrl: './czarni.component.html',
  styleUrls: ['./czarni.component.less']
})
export class CzarniComponent implements OnInit {

  private _jsonURL = 'assets/czarni.json';
    czarniData: Object;
    
  constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
        console.log(data);
        this.czarniData = data;
       });
    }
    public getJSON(): Observable<any> {
       return this.http.get(this._jsonURL);
     }

  ngOnInit(): void {
  }

}
