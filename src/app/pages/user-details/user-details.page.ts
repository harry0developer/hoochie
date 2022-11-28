import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { USER_ID } from 'src/app/utils/const';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.page.html',
  styleUrls: ['user-details.page.scss']
})
export class UserDetailsPage {

  user: any;
  isLoading: boolean = true;
  constructor(
    private route: ActivatedRoute, 
    private userDataService: UserDataService) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.isLoading = false;
    
      const id = params.get("id") ?  params.get("id") : 9999;
      console.log("Done...", id);
      this.user = this.userDataService.getUserById(id);
      console.log(this.user);
      
    }); 


  }
}
