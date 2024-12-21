import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-component',
  template: '<nav><a routerLink="/teams/addteam">Add Team</a><a routerLink="/teams/showteams">Show Teams</a><a routerLink="/teams/showmyteams">Show My Teams</a></nav>',
  styleUrls: ['./nav-bar-component.component.css']
})
export class NavBarComponentComponent {

}
