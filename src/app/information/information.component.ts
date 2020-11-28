import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  isAuthorized = true;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    // if (localStorage.getItem('token') == null || localStorage.getItem('user') == null) {
    //   this.isAuthorized = false;
    // } else {
    //
    // }
  }

}
