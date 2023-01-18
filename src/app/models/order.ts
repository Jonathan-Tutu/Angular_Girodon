export interface Order {
    id: number;
    ref: string;
    products: Array<{id: number, quantity: number}>
    user: number
    date: string
    price: number
}