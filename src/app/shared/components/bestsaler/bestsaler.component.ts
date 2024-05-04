import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Ishoes } from '../../model/productInterface';

@Component({
  selector: 'app-bestsaler',
  templateUrl: './bestsaler.component.html',
  styleUrls: ['./bestsaler.component.scss']
})
export class BestsalerComponent implements OnInit {
  products!:Array<Ishoes>;
  singleProductObj !: Ishoes
  @ViewChild('scroll') containerRef!: ElementRef;
  constructor(private _router : Router,
              private _proService : ProductsService,
              private _route : ActivatedRoute
  ) { }

  ngOnInit(){
    this.products= this._proService.getAllProducts()
    // console.log(this.products);
    
  }
  showButton:number =999;

  // getSingleProduct(id : number){
  //   this.singleProductObj = this.products.find(pro => pro.id === id)!
  //   console.log(this.singleProductObj);
    
  // }

  items = Array.from({ length: 10 }, (_, i) => i + 1);

  scrollLeft() {
    this.containerRef.nativeElement.scrollBy({
      left: -200, // Adjust the value to scroll more or less
      behavior: 'smooth' // Smooth scrolling
    });
  }

  scrollRight() {
    this.containerRef.nativeElement.scrollBy({
      left: 200, // Adjust the value to scroll more or less
      behavior: 'smooth' // Smooth scrolling
    });
  }
  showbutton(index:number){
    this.showButton=index;
  }
  hidebutton(){
    this.showButton=999;
  }

  productInfo(data:any){
  //   console.log("data",data);
    
    localStorage.setItem('product',JSON.stringify(data))
    this._proService.selectProduct(data);
    this._router.navigate([`/product-detail/${data.id}`]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // onAddCard(objProd : Ishoes){
  //   this.singleProductObj = objProd
  //   console.log(this.singleProductObj);
  //   let obj ={
  //     id : this.products.id,
  //     name : this.products.name,
  //     price : this.singleProductObj.price,
  //     description : this.singleProductObj.description,
  //     brand : this.singleProductObj.brand,
  //     gender : this.singleProductObj.gender,
  //     category : this.singleProductObj.category,
  //     color : this.singleProductObj.color,
  //     size : this.singleProductObj.size,
  //     discountPrice : this.singleProductObj.discountPrice,
  //     isInInventory : this.singleProductObj.is_in_inventory,
  //     itemsLeft : this.singleProductObj.items_left,
  //     imageUrl : this.singleProductObj.imageURL,
  //     slug : this.singleProductObj.slug
  //   }
  //   console.log(obj);
  //   this._proService.getAddNewProductsApi(obj)
  // }

}
