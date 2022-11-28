import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserDetailsPage } from './user-details.page';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDetailsPageRoutingModule {}
