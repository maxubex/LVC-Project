import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users$?: Observable<IUser[]>;

  constructor(private userSvc: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.userSvc.getUsers();
  }
}
