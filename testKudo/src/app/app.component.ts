import { Component } from '@angular/core';

import { FetchdataService } from './fetchdata.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FetchdataService]
})

export class AppComponent implements OnInit {

  posts=[''];
  title = 'Angular HttpClient';
  Url = "https://graph.microsoft.com/v1.0/users/?$top=999&$Select=displayName,mail";

  constructor(private srv: FetchdataService) {}

  getPosts() : void {
    this.srv.getData(this.Url)
      .subscribe(
        data => console.log(data))
  }

  ngOnInit() {
    this.getPosts()
  }
  
}
