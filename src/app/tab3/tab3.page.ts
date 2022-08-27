import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(
    private avatarService: AvatarService,
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController) {}



  async logout() {
    await  this.authService.logout();
    this.router.navigateByUrl('/',{replaceUrl: true});
   }

   async goHome() {
    this.router.navigateByUrl('/tabs/home',{replaceUrl: true});
   }

}
