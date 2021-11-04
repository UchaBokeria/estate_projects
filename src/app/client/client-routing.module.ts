import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "Home",
        component: HomeComponent,
      },
      {
        path: "Product/:name",
        component: ProductComponent,
      },
      {
        path: "Detail/:id",
        component: DetailComponent,
      },
      {
        path: "Contact",
        component: ContactComponent,
      },
      {
        path: "About",
        component: AboutusComponent,
      },
      {
        path: "",
        redirectTo: "Home",
        pathMatch: "full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
