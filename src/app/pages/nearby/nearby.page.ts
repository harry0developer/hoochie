import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-nearby',
  templateUrl: 'nearby.page.html',
  styleUrls: ['nearby.page.scss']
})
export class NearbyPage {

  data: any
  isLoaded: boolean = false;
  constructor( private userDataService: UserDataService) {}


  ngOnInit() { 
    // this.userDataService.getUsersList().subscribe(res => {
    //   this.data = res;
    //   localStorage.setItem(ALL, JSON.stringify(res));
    // }, err => {
    //   console.log(err);
    // }, () => {
    //   this.isLoaded = true
    // })
  }
}
