import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-kudos',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.css']
})
export class KudosComponent implements OnInit {

  topics :any 


  from = this.authService.user.displayName
  to = ""
  value = null
  message = ""
  segCompany = "billennium"
 
  constructor(private http: HttpClient,
    private authService: AuthService,
    ) { 
  }




  ngOnInit() {
    return this.http.get("http://a6691635.ngrok.io/api/values")
    .subscribe(data => {
      this.topics = data;
      console.log( this.topics)
    })
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


       return this.http.post('http://a6691635.ngrok.io/api/kudos', body)
       .subscribe(data => {
          console.log( data)
          }) 
          
  
   }

  selected = false;

}
