import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.page.html',
  styleUrls: ['user-details.page.scss']
})
export class UserDetailsPage {

  user: any;
  constructor(private route: ActivatedRoute, private userDataService: UserDataService) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const userId = params.get("id");
      if(userId) {
        const user = this.userDataService.getUserById(userId);
        this.user = user[0];
        console.log(user[0]);
      }
    }); 
  }
}
