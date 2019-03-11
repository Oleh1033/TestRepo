import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  kudos = {};

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    return this.http.get("http://2a060803.ngrok.io/api/kudos")
    .subscribe(data => {
      this.kudos = data;
      console.log( this.kudos)
    })
  }
}