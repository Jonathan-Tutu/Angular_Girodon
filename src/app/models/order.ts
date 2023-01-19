import {User} from "./user";

export interface Order {
    id: number;
    ref: string;
    products: Array<{id: number, quantity: number}>
    user: User|number
    date: string
    price: number
}