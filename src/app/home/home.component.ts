import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  /*selector: 'app-home',*/
  templateUrl: './home.component.html'
  /*styleUrls: ['./home.component.css']*/
})
export class HomeComponent {
  loading = false;
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        console.log(users);

        this.loading = false;
        this.users = users;
      });
  }
}
