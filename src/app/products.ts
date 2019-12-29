export const products: product[] = [
  {
    id: 1,
    name: "Phone XL",
    price: 799,
    description: "A large phone with one of the best screens"
  },
  {
    id: 2,
    name: "Phone Mini",
    price: 699,
    description: "A great phone with one of the best cameras"
  },
  {
    id: 3,
    name: "Phone Standard",
    price: 299,
    description: ""
  }
];

export interface product {
  id: number;
  name: string;
  price: number;
  description: string;
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
