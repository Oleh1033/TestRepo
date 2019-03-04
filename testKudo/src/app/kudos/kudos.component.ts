import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kudos',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.css']
})
export class KudosComponent implements OnInit {

  username: string = '';
  response: any;



  constructor(private http: HttpClient) { }

  search(){
 // //  this.http.get('https://jsonplaceholder.typicode.com/users')
  //  .subscribe((response) => {
  //    this.response = response;
  //    console.log(response + 'asd');
  //  })
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((response) => {
      this.response = response;
      console.log(response);
    })
  }

}
