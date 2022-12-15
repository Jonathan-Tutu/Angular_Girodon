import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Product } from '../models/product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /*
  products: Product[] = [
    new Product(1, 'product 1', 'This is the product', 100, 'https://catfriendly.com/wp-content/uploads/2016/11/Cat-Lying-Down-Red-coloring-Istock-300x300.jpg'),
    new Product(2, 'product 1', 'This is the product', 100, 'https://catfriendly.com/wp-content/uploads/2016/11/Cat-Lying-Down-Red-coloring-Istock-300x300.jpg'),
    new Product(3, 'product 1', 'This is the product', 100, 'https://catfriendly.com/wp-content/uploads/2016/11/Cat-Lying-Down-Red-coloring-Istock-300x300.jpg'),
    new Product(1, 'product 1', 'This is the product', 100, 'https://catfriendly.com/wp-content/uploads/2016/11/Cat-Lying-Down-Red-coloring-Istock-300x300.jpg'),
    new Product(2, 'product 1', 'This is the product', 100, 'https://catfriendly.com/wp-content/uploads/2016/11/Cat-Lying-Down-Red-coloring-Istock-300x300.jpg'),
    new Product(3, 'product 1', 'This is the product', 100, 'https://catfriendly.com/wp-content/uploads/2016/11/Cat-Lying-Down-Red-coloring-Istock-300x300.jpg'),
    new Product(1, 'product 1', 'This is the product', 100, 'https://catfriendly.com/wp-content/uploads/2016/11/Cat-Lying-Down-Red-coloring-Istock-300x300.jpg'),
    new Product(2, 'product 1', 'This is the product', 100, 'https://catfriendly.com/wp-content/uploads/2016/11/Cat-Lying-Down-Red-coloring-Istock-300x300.jpg'),
  ]
*/
  products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> 
  {
    //TODO: Populate product from an API and return an observable
    return this.httpClient.get<Product[]>("assets/data.json")
  }
}
