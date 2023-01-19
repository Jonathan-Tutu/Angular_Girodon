import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/order";
import {UserService} from "./user.service";
import {User} from "../models/user";
import {map} from "rxjs/operators";
import {ProductService} from "./product.service";
import {Product} from "../models/product";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    users?: User[];
    products?: Product[];

    constructor(
        private httpClient: HttpClient,
        private userService: UserService,
        private productService: ProductService
    ) {
    }

    public getOrders(): Observable<Order[]> {
        this.userService.getUsers().subscribe((users) => {
            this.users = users;
        });
        this.productService.getProducts().subscribe((products) => {
            this.products = products;
        });

        return this.httpClient.get<Order[]>("assets/data/order-data.json")
            .pipe(map((orders) => {
                // Pas très optimisé pour récupérer des données d'autres json mais vu qu'il n'y a pas d'api ni de BDD ^^
                orders.forEach( (order) => {
                    this.users?.forEach((user) => {
                        if (order.user == user.id) {
                            order.user = user;
                        }
                    });
                    order.products.forEach((orderProduct) => {
                        this.products?.forEach((product) => {
                            if (orderProduct.product == product.id) {
                                orderProduct.product = product;
                            }
                        });
                    });
                });
                return orders;
            }));
    }
}
