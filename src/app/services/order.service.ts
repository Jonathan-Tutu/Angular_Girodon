import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/order";
import {UserService} from "./user.service";
import {User} from "../models/user";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    users?: User[];

    constructor(
        private httpClient: HttpClient,
        private userService: UserService
    ) {
    }

    public getOrders(): Observable<Order[]> {
        this.userService.getUsers().subscribe((users) => {
            this.users = users;
        })
        return this.httpClient.get<Order[]>("assets/data/order-data.json")
            .pipe(map((orders) => {
                orders.forEach( (order) => {
                    this.users?.forEach((user) => {
                        if (order.user == user.id) {
                            order.user = user;
                        }
                    });
                });
                return orders;
            }));
    }
}
