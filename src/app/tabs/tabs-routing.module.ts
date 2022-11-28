import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'nearby',
        loadChildren: () => import('../pages/nearby/nearby.module').then(m => m.NearbyPageModule)
      },
      {
        path: 'chats',
        loadChildren: () => import('../pages/chats/chats.module').then(m => m.ChatsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      }, 
      {
        path: '',
        redirectTo: '/tabs/nearby',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/nearby',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TabsPageRoutingModule {}
