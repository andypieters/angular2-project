import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserValidators } from '../user.validators';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  moduleId: module.id,
  selector: 'app-user-form',
  providers: [FormBuilder, UserService],
  directives: [REACTIVE_FORM_DIRECTIVES],
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css']
})
export class UserFormComponent implements OnInit {
  title: string;
  id: string;
  user = new User();
  form: FormGroup;
  constructor(
    private _builder: FormBuilder, 
    private _userService: UserService, 
    private _router:Router,
    private _activeRoute: ActivatedRoute ) {     
  }
  
  ngOnInit() {
    this.buildForm();

    let id = this._activeRoute.snapshot.params['id'];
    this.title = id?'Edit user':'Add a user';

    if(!id)
      return;

    this.id = id;
    this._userService.getUser(id)
        .subscribe(
          user => this.user=user,
          resonse => {{
            if(resonse.status == 404){
              this._router.navigate(['/users/not-found']);
            }
          }});
  }

  private buildForm(){
    this.form = this._builder.group({
        name: ['', Validators.required],
        email: ['', UserValidators.validEmail],
        phone: [''],
        address: this._builder.group({
          street: [''],
          suite: [''],
          city: [''],
          zipcode: [''],
        })
    });
  }
  	
  submit(){
    if(!this.id){
      this._userService.addUser(this.form.value)
          .subscribe(user => 
            this._router.navigate(['users'])
          );
    } else {
      this._userService.updateUser(this.id, this.form.value)
          .subscribe(user => 
            this._router.navigate(['users'])
          );
    }
  }

}
