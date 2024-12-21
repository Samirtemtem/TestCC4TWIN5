import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ParticipantsModule } from './participants/participants.module';
const routes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  { path: 'teams', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) },
  { path : 'participants', loadChildren: () => import('./participants/participants.module').then(m => m.ParticipantsModule) },
  
  { path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
