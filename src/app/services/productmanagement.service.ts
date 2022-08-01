import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { Product } from '../common/product';
import { Productcategory } from '../common/productcategory';

@Injectable({
  providedIn: 'root'
})
export class ProductmanagementService {
  
  private baseUrl="http://localhost:8080/api/pro";
  private baseDUrl="http://localhost:8080/api/pcat";

  constructor(private httpclient : HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    
    return this.httpclient.get<GetResponseProducts>(this.baseUrl)
    .pipe(map(response => response._embedded.products));
  }

  getAllProductCategory():Observable<Productcategory[]>{
    return this.httpclient.get<GetResponseProductsCategory>(this.baseDUrl)
    .pipe(map(response => response._embedded.productcategorys));

  }
}

interface GetResponseProducts{
  _embedded :{
    products : Product[]
  }


}

interface GetResponseProductsCategory{
  _embedded :{
   productcategorys :Productcategory[];
  }
 
 }
