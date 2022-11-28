import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { ALL, USER_ID } from 'src/app/utils/const';

@Component({
  selector: 'app-nearby',
  templateUrl: 'nearby.page.html',
  styleUrls: ['nearby.page.scss']
})
export class NearbyPage {

  data: any
  constructor( private userDataService: UserDataService) {}


  ngOnInit() { 
    this.userDataService.getUsersList().subscribe(res => {
      this.data = res;
      localStorage.setItem(ALL, JSON.stringify(res));
    })
  }
}
