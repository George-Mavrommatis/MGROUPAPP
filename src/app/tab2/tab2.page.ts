import { Component, NgModule, OnInit, TemplateRef, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
