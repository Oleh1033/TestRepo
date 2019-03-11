import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-kudos',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.css']
})
export class KudosComponent implements OnInit {

  powers = ["Zaufanie", "Kreatywność","Rozwój"]
  
  from = ""
  message = ""
 
  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  } 

   sendKudos(){
         
       const body = {from: this.from, message: this.message};
       console.log(body)
       return this.http.post(' https://4f1bce84.ngrok.io/api/kudos', body); 
  
   }

  selected = false;

}
