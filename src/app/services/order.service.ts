import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  public getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>("assets/data/order-data.json")
  }
}
