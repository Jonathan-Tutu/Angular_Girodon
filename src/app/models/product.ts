export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    rating: string;

    constructor(id: number, name: string,description: string, price: number, imageUrl: string, rating: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.rating = rating;
    }
}
