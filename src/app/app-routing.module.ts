import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { StoresComponent } from './stores/stores.component';
import { BuyerComponent } from './views/buyer/buyer.component';
import { ServicesComponent } from './views/services/services.component';
import { PortfolioComponent } from './views/portfolio/portfolio/portfolio.component';
import { ContactComponent } from './views/contact/contact/contact.component';
import { ProductComponent } from './views/about/product.component';
import { HireresponseComponent } from './views/response/hireresponse/hireresponse.component';
import { ContactresponseComponent } from './views/response/contactresponse/contactresponse.component';
import {  GamestoreComponent } from './gamestore/gamestore.component';
import { SellerComponent } from './views/seller/seller.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import {  MeetourteamComponent } from './meetourteam/meetourteam.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'buyer',
    component: BuyerComponent
  },
  {
    path: '',
    redirectTo: 'buyer',
    pathMatch:'full'
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: '',
    redirectTo: 'services',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'stores',
    component: StoresComponent
  },
  {
    path: '',
    redirectTo: 'stores',
    pathMatch: 'full'
  },
  {
    path: 'gamestore',
    component: GamestoreComponent
  },
  {
    path: '',
    redirectTo: 'stores',
    pathMatch: 'full'
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  },
  {
    path: 'hireresponse',
    component: HireresponseComponent
  },
  {
    path: '',
    redirectTo: 'hireresponse',
    pathMatch: 'full'
  },
  {
    path: 'contactresponse',
    component: ContactresponseComponent
  },
  {
    path: '',
    redirectTo: 'contactresponse',
    pathMatch: 'full'

  },
  {
    path: 'seller',
    component: SellerComponent
  },
  {
    path: '',
    redirectTo: 'seller',
    pathMatch: 'full'

  },
  {
    path: 'whoweare',
    component: WhoweareComponent
  },
  {
    path: '',
    redirectTo: 'whoweare',
    pathMatch: 'full'

  },
  {
    path: 'meetourteam',
    component: MeetourteamComponent
  },
  {
    path: '',
    redirectTo: 'meetourteam',
    pathMatch: 'full'

  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ReactiveFormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
