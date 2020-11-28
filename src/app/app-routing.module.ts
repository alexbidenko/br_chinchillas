import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {PurchaseComponent} from './purchase/purchase.component';
import {ChinchillasComponent} from './chinchillas/chinchillas.component';
import {AdultsComponent} from './chinchillas/adults/adults.component';
import {BabiesComponent} from './chinchillas/babies/babies.component';
import {ChinchillaComponent} from './chinchilla/chinchilla.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ProductsComponent} from './products/products.component';
import {InformationComponent} from "./information/information.component";
import {NutritionComponent} from "./information/nutrition/nutrition.component";
import {KeepingComponent} from "./information/keeping/keeping.component";
import {IllnessesComponent} from "./information/illnesses/illnesses.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'chinchilla/:page/:id', component: ChinchillaComponent, data: {}},
  { path: 'home', component: MainComponent, data: {}},
  { path: 'shop', redirectTo: 'shop/sale', pathMatch: 'full'},
  { path: 'shop/:section', component: PurchaseComponent, data: {}},
  { path: 'products', component: ProductsComponent, data: {}},
  { path: 'chinchillas', component: ChinchillasComponent, data: {},
    children: [
      { path: 'adults', component: AdultsComponent, data: {}},
      { path: 'babies', redirectTo: 'babies/' + new Date().getFullYear(), pathMatch: 'full'},
      { path: 'babies/:year', component: BabiesComponent, data: {}}
    ]
  },
  { path: 'contacts', component: ContactsComponent, data: {}},
  {
    path: 'information',
    component: InformationComponent,
    children: [
      {
        path: 'nutrition',
        component: NutritionComponent
      },
      {
        path: 'keeping',
        component: KeepingComponent
      },
      {
        path: 'illnesses',
        component: IllnessesComponent
      },
      {
        path: 'colors',
        component: NutritionComponent
      }
    ],
  },
  { path: '**', component: NotFoundComponent, data: {}}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
