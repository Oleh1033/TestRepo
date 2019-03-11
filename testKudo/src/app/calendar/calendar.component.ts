import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  records = {};


  constructor(private http: HttpClient) { 

  }


  ngOnInit() {
    return this.http.get("http://4f1bce84.ngrok.io/api/kudos")
    .subscribe(data => {
      this.records = data;
      console.log( this.records)
    })
  }


 
}