import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantsRoutingModule } from './participants-routing.module';
import { ParticipantModuleComponent } from './participant-module/participant-module.component';
import { ParticipantsComponent } from './participants/participants.component';


@NgModule({
  declarations: [
    ParticipantModuleComponent,
    ParticipantsComponent
  ],
  imports: [
    CommonModule,
    ParticipantsRoutingModule
  ]
})
export class ParticipantsModule { }
