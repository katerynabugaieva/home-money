import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';
import {Message} from '../../shared/models/message.model';
import { UsersService } from 'src/app/shared/services/users.servise';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form: FormGroup;
message: Message;
  constructor(private usersService: UsersService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.message = new Message('', 'danger');
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() =>
      { this.message.text = ''; }, 2000);
  }
  onSubmit() {
    const formData = this.form.value;
    this.usersService
    .getUserByEmail(formData.email)
    .subscribe((user: User) => {
    if (user) {
      if (user.password === formData.password) {
        window.localStorage.setItem('user', JSON.stringify(user));
        this.authService.login();
     //   this.router.navigate([''])
      } else {
        this.showMessage('wrong pass');
      }
  } else {
    this.showMessage('noooo');
  }
});
  }
}
