import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsPage } from '../user-details/user-details.page';
import { NearbyPage } from './nearby.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class NearbyPageRoutingModule {}
