import { Component, OnInit } from '@angular/core';
import { Productcategory } from 'src/app/common/productcategory';
import { ProductmanagementService } from 'src/app/services/productmanagement.service';

@Component({
  selector: 'app-productcategory-list',
  templateUrl: './productcategory-list.component.html',
  styleUrls: ['./productcategory-list.component.css']
})
export class ProductcategoryListComponent implements OnInit {

  productcategorys: Productcategory[];
  constructor(private service:ProductmanagementService) { }

  ngOnInit(): void {
    this.listOfProductsCategory()
  }

  listOfProductsCategory(){
    this.service.getAllProductCategory().subscribe(data =>{
      console.log(data);
      this.productcategorys= data;
     
    })
  }

}
