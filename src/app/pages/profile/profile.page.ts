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

  user: any;
  isLoading: boolean = true;

  images = [
    {"id":37,"name":"Virge","email":"vpulford10@g.co","gender":"Genderqueer","race":"Alaskan Athabascan","avatar":"https://robohash.org/veldignissimosvelit.png?size=100x100&set=set1","age":71,"distance":52.0},
    {"id":38,"name":"Worth","email":"wdaltrey11@guardian.co.uk","gender":"Male","race":"Nicaraguan","avatar":"https://robohash.org/quiquiafuga.png?size=100x100&set=set1","age":45,"distance":54.4},
    {"id":39,"name":"Skipper","email":"smasedon12@blogger.com","gender":"Male","race":"Yaqui","avatar":"https://robohash.org/explicaboeumqui.png?size=100x100&set=set1","age":99,"distance":28.8},
    {"id":40,"name":"Vanda","email":"vfawdrie13@dell.com","gender":"Female","race":"Asian Indian","avatar":"https://robohash.org/inquasquidem.png?size=100x100&set=set1","age":9,"distance":23.9},
    {"id":41,"name":"Bax","email":"bbraizier14@unc.edu","gender":"Male","race":"Fijian","avatar":"https://robohash.org/debitisdoloremad.png?size=100x100&set=set1","age":72,"distance":31.4},
    {"id":42,"name":"Loraine","email":"lpraten15@jugem.jp","gender":"Female","race":"White","avatar":"https://robohash.org/ipsautassumenda.png?size=100x100&set=set1","age":92,"distance":96.4},
  ];
  constructor( 
    private route: ActivatedRoute, 
    private userDataService: UserDataService) {}

  ngOnInit() { 
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.isLoading = false;
      const id = params.get("id") ?  params.get("id") : 9999;
      this.user = this.userDataService.getUserById(id);
      console.log(this.user);
    }); 
  }
}
