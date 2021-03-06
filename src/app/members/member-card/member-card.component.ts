import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
  @Input() userCard: User;

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _alertify: AlertifyService
  ) {}

  ngOnInit() {}

  sendLike(id: number) {
    this._userService
      .sendLike(this._authService.decodedToken.nameid, id)
      .subscribe(
        (data) => {
          this._alertify.success('თქვენ მოიწონეთ: ' + this.userCard.knownAs);
        },
        (error) => {
          this._alertify.error(error);
        }
      );
  }
}
