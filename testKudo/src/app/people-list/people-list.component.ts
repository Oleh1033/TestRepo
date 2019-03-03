import { Component, OnInit } from '@angular/core';
import { GraphService } from 'app/graph.service';
import { AlertsService } from 'app/alerts.service';
import { User } from 'msal';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  private people: User[];

  constructor(
    private graphService: GraphService,
    private alertsService: AlertsService) { }

  ngOnInit() {
    this.graphService.getPeople()
      .then((people) => {
        this.people = people;
      })
  }

}
