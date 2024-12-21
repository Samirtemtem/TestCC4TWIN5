
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from 'src/app/models/team';

import { Participant

 } from 'src/app/models/participant';import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css']
})
export class FormTeamComponent {
  teamForm: FormGroup;
  participants: Participant[] = [{ id: 1, fullname: '', email: '' }]; // Initial participant

  constructor(private fb: FormBuilder,private TeamService:TeamService) {
    this.teamForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      projectName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      level: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      projectDescription: ['', [Validators.minLength(5)]],
      participants: this.fb.array(this.participants.map(p => this.createParticipantFormGroup(p)))
    });
  }

  createParticipantFormGroup(participant: Participant): FormGroup {
    return this.fb.group({
      fullname: [participant.fullname, Validators.required],
      email: [participant.email, [Validators.required, Validators.email]]
    });
  }

  addParticipant() {
    this.participants.push({ id: this.participants.length + 1, fullname: '', email: '' });
  
    //this.teamForm.get('participants')?.push(this.createParticipantFormGroup({ id: 0, fullname: '', email: '' }));
  }

  onSubmit() {
    if (this.teamForm.valid) {
      const newTeam: Team = this.teamForm.value;
      this.TeamService.addTeam(newTeam).subscribe(
       {
        next: (data) => {
        console.log(data);
        }
       }
      )
      console.log('Team added:', newTeam);
    }
  }
}
