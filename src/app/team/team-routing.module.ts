import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTeamComponent } from './form-team/form-team.component';
import { MyteamsComponent } from './myteams/myteams.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'addteam', component: FormTeamComponent },
  { path: 'showteams', component: TeamsComponent },
  { path: 'showmyteams', component: MyteamsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
