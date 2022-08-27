import { Component, NgModule, OnInit, TemplateRef, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Category } from '../models/category.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit {

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
async goHome() {

  this.router.navigateByUrl('/tabs/home',{replaceUrl: true});
 }

async changeImage() {

}

getCategories() {
  this.categories = [
  {
    id: 1,
    label: 'Crete',
    image: 'assets/imgs/Crete.jpg',
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
