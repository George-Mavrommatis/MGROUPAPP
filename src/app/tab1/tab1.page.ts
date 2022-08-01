
  import { Component, NgModule, OnInit, TemplateRef, ViewChildren } from '@angular/core';
  import { Router } from '@angular/router';
  import { AlertController, LoadingController } from '@ionic/angular';
  import { AuthService } from '../services/auth.service';
  import { AvatarService } from '../services/avatar.service';
  import { CommonModule } from '@angular/common';
  import { IonicModule } from '@ionic/angular';
  import { Category } from '../models/category.model';

  @Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
  })

  export class Tab1Page implements OnInit {

    profile = null;
    categories: Category[] = [];

    constructor(
      private avatarService: AvatarService,
      private authService: AuthService,
      private router: Router,
      private loadingController: LoadingController,
      private alertController: AlertController
    ) {}

    ngOnInit(): void  {
      this.getCategories();
    }

  async logout() {
   await  this.authService.logout();
   this.router.navigateByUrl('/',{replaceUrl: true});
  }

  async changeImage() {

  }

  getCategories() {
    this.categories = [
    {
      id: 1,
      label: 'Crete',
      image: 'assets/imgs/Logo.png',
      active: true
    },
    {
      id: 2,
      label: 'Kos',
      image: 'assets/imgs/Kos.jpg',
      active: true
    },
    {
      id: 3,
      label: 'Rhodes Plimmiri',
      image: 'assets/imgs/Plimiri.jpg',
      active: true
    },
    {
      id: 4,
      label: 'Rhodes Kolymbia',
      image: 'assets/imgs/Rhodes.jpg',
      active: true
    },
    ];
  }
}
