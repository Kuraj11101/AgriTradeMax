import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
//import { FormsModule } from '@angular/forms';
import { BuyerComponent  } from './views/buyer/buyer.component';
import { ServicesComponent } from './views/services/services.component';
import { SharedModule } from './shared/shared.module';
import { PartialsModule } from './partials/partials.module';
import { Utils } from './core/utils';
import { Constants } from './core/constants';
import { HttpClientModule } from '@angular/common/http';
import { HireService } from './service/hire.service';
import { PortfolioComponent } from './views/portfolio/portfolio/portfolio.component';
import { ContactComponent } from './views/contact/contact/contact.component';
import { ProductComponent } from './views/about/product.component';
import { HireresponseComponent } from './views/response/hireresponse/hireresponse.component';
import { ContactresponseComponent } from './views/response/contactresponse/contactresponse.component';
import { StoresComponent } from './stores/stores.component';
import { GamestoreComponent } from './gamestore/gamestore.component';
import { SellerComponent } from './views/seller/seller.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { MeetourteamComponent } from './meetourteam/meetourteam.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyerComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    ProductComponent,
    HireresponseComponent,
    ContactresponseComponent,
    StoresComponent,
    GamestoreComponent,
    SellerComponent,
    WhoweareComponent,
    MeetourteamComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    PartialsModule,
    ReactiveFormsModule,
	  FormsModule,
    RouterModule,
	  SharedModule
  ],
  providers: [ Constants, Utils, HireService ],
  bootstrap: [AppComponent]
})
export class AppModule { };