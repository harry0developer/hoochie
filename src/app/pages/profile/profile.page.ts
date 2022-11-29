import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserDataService } from 'src/app/services/user-data.service';
import { ALL } from 'src/app/utils/const';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

 
  isLoading: boolean = true;
 
  user = {"id":42,"name":"Loraine","email":"lpraten15@jugem.jp","gender":"Female","race":"White","avatar":"https://robohash.org/ipsautassumenda.png?size=100x100&set=set1","age":25,"distance":95};

  constructor( 
    private route: ActivatedRoute, 
    private userDataService: UserDataService) {}
 
}
