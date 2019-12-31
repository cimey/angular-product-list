import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { filter, map, flatMap } from "rxjs/operators";
import { products, product } from "../products";
import {CartService} from "../services/cart.service";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: product;
  constructor(private route: ActivatedRoute,
              private cartService: CartService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      of(products)
        .pipe(
          map(x => x.filter(t=> t.id === +params.get("productId")))
        )
        .subscribe(x => console.log(typeof(x)));
      // of(products).pipe(filter(x=> x.id == params.get("productId"))).subscribe(x=> console.log(x))
      this.product = products[params.get("productId")];
    });
  }

  addToCart(item){
      window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(item);
  }
}
