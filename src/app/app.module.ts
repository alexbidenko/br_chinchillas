import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import {RouterModule} from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SectionAboutComponent } from './main/section-about/section-about.component';
import {HttpClientModule} from '@angular/common/http';
import { ChinchillasComponent } from './chinchillas/chinchillas.component';
import { AdultsComponent } from './chinchillas/adults/adults.component';
import { BabiesComponent } from './chinchillas/babies/babies.component';
import { ChinchillaComponent } from './chinchilla/chinchilla.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ConfirmComponent } from './purchase/confirm/confirm.component';
import { ProductsComponent } from './products/products.component';
import {NavigationModule} from './navigation/navigation.module';
import {InformationComponent} from './information/information.component';
import {NutritionComponent} from './information/nutrition/nutrition.component';
import {KeepingComponent} from './information/keeping/keeping.component';
import {IllnessesComponent} from './information/illnesses/illnesses.component';
import {AuthorizationComponent} from './information/authorization/authorization.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainComponent,
    FooterComponent,
    PurchaseComponent,
    SectionAboutComponent,
    ChinchillasComponent,
    AdultsComponent,
    BabiesComponent,
    ChinchillaComponent,
    ContactsComponent,
    NotFoundComponent,
    CardComponent,
    ConfirmComponent,
    ProductsComponent,
    InformationComponent,
    AuthorizationComponent,
    NutritionComponent,
    KeepingComponent,
    IllnessesComponent,
    NutritionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NavigationModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
