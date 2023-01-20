import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product.service";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    product?: Product;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.productService.getProducts().subscribe((products: Product[]) => {
                    products.forEach((product: Product) => {
                        if (product.id == params['id']) {
                            this.product = product;
                            console.log(this.product);
                        }
                    });
                });
            }
        );
    }
}
