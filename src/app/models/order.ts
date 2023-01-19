import {User} from "./user";
import {Product} from "./product";

export interface Order {
    id: number;
    ref: string;
    products: Array<OrderProduct>
    user: User|number
    date: string
    price: number
}

export interface OrderProduct {
    product: Product|number;
    quantity: number;
}