import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductmanagementService } from 'src/app/services/productmanagement.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
a
  products: Product[]; 


  constructor(private service: ProductmanagementService) { }

  ngOnInit(): void {
    this.listOfProducts()
    
  }
  listOfProducts(){
    this.service.getAllProducts().subscribe(data =>{
      console.log(data);
      this.products = data;
     
    })
  }

 

}
