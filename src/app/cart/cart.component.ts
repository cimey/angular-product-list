import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";

import { FormBuilder,FormGroup } from "@angular/forms";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  checkoutForm: FormGroup;
  products = [];
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getAllItemsInCart();
    this.checkoutForm = this.formBuilder.group({
      name: 'ww',
      id: 'w'
    });
  }

  getAllItemsInCart(): void {
    this.products = this.cartService.getItems();
  }

  onSubmit(formValue){
    window.alert( JSON.stringify (formValue));
    this.cartService.clear();
    this.checkoutForm.reset();
  }
}
