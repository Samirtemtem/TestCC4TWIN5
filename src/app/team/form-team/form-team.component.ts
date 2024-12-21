import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Team } from 'src/app/models/team';
import { Participant } from 'src/app/models/participant';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css']
})
export class FormTeamComponent {
  teamForm: FormGroup;
  participants: Participant[] = [{ id: 1, fullname: '', email: '' }]; // Initial participant

  constructor(private fb: FormBuilder, private TeamService: TeamService) {
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
    this.TeamService.addParticipant({ id: 0, fullname: '', email: '' }).subscribe({
      next: (newParticipant) => {
        this.participants.push({ 
          id: newParticipant.id, 
          fullname: newParticipant.fullname, 
          email: newParticipant.email 
        });
        const participantsArray = this.teamForm.get('participants') as FormArray;
        participantsArray.push(this.createParticipantFormGroup(newParticipant));
      },
      error: (error) => {
        console.error('Error adding participant:', error);
      }
    });
  }

  onSubmit() {
    const participantsArray = this.teamForm.get('participants') as FormArray;
    participantsArray.controls.forEach((participantControl, index) => {
      const participant = participantControl.value;
      if (!participant.id) {
        this.TeamService.addParticipant(participant).subscribe({
          next: (newParticipant) => {
            participantControl.patchValue(newParticipant);
          },
          error: (error) => {
            console.error(`Error adding participant at index ${index}:`, error);
          }
        });
      }
    });
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
