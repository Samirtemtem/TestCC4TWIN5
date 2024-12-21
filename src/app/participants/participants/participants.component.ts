
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-participants',
  template: `
    <div *ngIf="team">
      <h2>Participants for {{ team.name }}</h2>
      <p>Description: {{ team.projectDescription }}</p>
      <ul>
        <li *ngFor="let participant of team.participants">
          {{ participant.fullname }} - {{ participant.email }}
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class ParticipantsComponent implements OnInit {
  team!: Team;

  constructor(private route: ActivatedRoute,private TeamService:TeamService) {}

  ngOnInit() {
    const teamId = this.route.snapshot.paramMap.get('id');
      this.TeamService.getTeam(teamId).subscribe(
        {
         next: (data) => {
         console.log(data);
         this.team = data[0];
         }
        }
       )

 
  }
}