import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './user.service';


@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: 'users.component.html',
  providers: [UserService],
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {
  public users = [];

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(users => {this.users = users});
  }
  delete(user){
    if(!confirm("Are you sure you want to delete "+user.name+"?"))
      return;
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);

    this._userService.deleteUser(user).subscribe(
      result => {},
      error => {
        this.users.splice(index, 0, user);
      }
    );
  }

}
