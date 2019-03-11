import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-kudos',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.css']
})
export class KudosComponent implements OnInit {

  powers = ["Zaufanie", "Kreatywność","Rozwój"]
  


  from = "oleh"
  to = ""
  value = "Kreatywność"
  message = ""
  segCompany = "billennium"
 
  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  } 

   sendKudos(){
         
       const body = {
          from: this.from,
          message: this.message,
          to : this.to ,
          value : this.value ,
          segCompany: this.segCompany
        };
    
       console.log(body)


       return this.http.post('http://2a060803.ngrok.io/api/kudos', body)
       .subscribe(data => {
          console.log( data)
          }) 
  
   }

  selected = false;

}
