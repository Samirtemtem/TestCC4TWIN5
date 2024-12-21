import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { FormTeamComponent } from './form-team/form-team.component';
import { MyteamsComponent } from './myteams/myteams.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TeamsComponent,
    FormTeamComponent,
    MyteamsComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MyteamsComponent
  ]
})
export class TeamModule { }
