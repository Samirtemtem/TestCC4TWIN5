import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:3000/teams';

  constructor(private http: HttpClient) {}
  addParticipant(participant: Participant): Observable<Participant> {
    console.log("Adding participant");
    return this.http.post<Participant>("http://localhost:3000/participants", participant);
  }
  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }
  getTeam(id : any): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl+"?id="+id);
  }


  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.apiUrl, team);
  }
}