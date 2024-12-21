
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  template: `
    <div *ngFor="let team of teams">
      <app-team [team]="team"></app-team>
    </div>
  `,
  styles: []
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];
  constructor(private TeamsService:TeamService) {}
  ngOnInit() {
    console.log("FETCHING")
    this.TeamsService.getTeams().subscribe(  {
      next: (data) => {
        console.log(
          "TEAM:" +data
        )
      this.teams = data;
      }
     })
  }
}
