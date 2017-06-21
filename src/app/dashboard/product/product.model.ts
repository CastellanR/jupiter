export class Product{
  sku: string;
  name: string;
  image: string;
  review: number;
  price: number;

  constructor(name: string,sku: string, image: string, review: number, price: number){
    this.sku=sku;
    this.review=review;
    this.name=name;
    this.image=image;
    this.price=price;
  }

}
