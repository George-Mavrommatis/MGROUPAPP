import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectLoggedInTo, redirectUnauthorizedTo, canActivate} from '@angular/fire/auth-guard';
import { TabsPage } from './tabs.page';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['profile']);

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'information',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule),
        ...canActivate(redirectUnauthorizedToLogin)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
