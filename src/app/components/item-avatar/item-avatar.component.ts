import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/oldUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-avatar',
  templateUrl: './item-avatar.component.html',
  styleUrls: ['./item-avatar.component.scss'],
})
export class ItemAvatarComponent {

  @Input() user?: User;
  constructor(private router: Router){}

  goToUserDetailsPage(user?: User) {
    this.router.navigate(['/user-details/'+ user?.id]);
  }
  

}
