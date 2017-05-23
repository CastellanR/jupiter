import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'jup-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})

export class ProductNewComponent implements OnInit {
  newProjectForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm():void{
      this.newProjectForm= null;
      setTimeout(()=>{
        this.newProjectForm = this.formBuilder.group({
        name: '',
        quantity: '',
        description: '',
        price:''
        });
      },0)
  }
  save(value:any) {
    this.product.name = value.name;
    this.product.quantity = value.quantity;
    this.product.description = value.description;
    this.product.tag = value.tag;
    this.product.collection = value.collection;
    this.product.price = value.price;    
    this.buildForm();
}
clear(){
  this.buildForm();
}
product: any = {
    name: "",
    quantity: 0,
    collection: "",
    tag:"",
    description:"",
    price:0
};
tags: any= [
  {
    name:"android"
  },
  {
    name:"IOS"
  },
  {
    name: "Windows Phone"
  }
];
collections: any= [
  {
    name:"Samsung"
  },
  {
    name:"Motorola"
  },
  {
    name: "Iphone"
  }];
}
