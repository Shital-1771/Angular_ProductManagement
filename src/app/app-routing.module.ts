import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './common/product';
import { Productcategory } from './common/productcategory';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductcategoryListComponent } from './components/productcategory-list/productcategory-list.component';

const routes: Routes = [
  {path:'product-list',component:ProductListComponent},
  {path:'product-category',component:ProductcategoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
