import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { filter, map, flatMap } from "rxjs/operators";
import { products, product } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: product;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get("productId"));
      of(products)
        .pipe(
          map(x => x.filter(t=> t.id === +params.get("productId")))
        )
        .subscribe(x => console.log(typeof(x)));
      // of(products).pipe(filter(x=> x.id == params.get("productId"))).subscribe(x=> console.log(x))
      this.product = products[params.get("productId")];
    });
  }
}
