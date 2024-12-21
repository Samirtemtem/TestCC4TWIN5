
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:3000/teams';

  constructor(private http: HttpClient) {}

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