
import { Component, Input } from '@angular/core';
import { Team } from 'src/app/models/team';
@Component({
  selector: 'app-team',
  template: `
    <div>
      <h3>{{ team.name }}</h3>
      <p>Level: {{ team.level }}</p>
      <p>Project Name: {{ team.projectName }}</p>
      <a routerLink="/participants/{{team.id}}">Details</a>
    </div>
  `,
  styles: []
})
export class MyteamsComponent {
  @Input() team!: Team;
}

