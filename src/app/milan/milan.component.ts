import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-milan',
  templateUrl: './milan.component.html',
  styleUrls: ['./milan.component.less']
})
export class MilanComponent implements OnInit {

  private _jsonURL = 'assets/milan.json';
    milanData: Object;
    
  constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
        console.log(data);
        this.milanData = data;
       });
    }
    public getJSON(): Observable<any> {
       return this.http.get(this._jsonURL);
     }

  ngOnInit(): void {
  }

}
