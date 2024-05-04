import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public MenDropdown : boolean = false;
  public WomenDropdown : boolean = false;
  public KidsDropdown : boolean = false;
  public CollectionDropdown : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  MenActive(){
    this.MenDropdown = true;
    this.WomenDropdown = false;
    this.KidsDropdown = false;
    this.CollectionDropdown = false;
  }
  WomenActive(){
    this.MenDropdown = false;
    this.WomenDropdown = true;
    this.KidsDropdown = false;
    this.CollectionDropdown = false;
  }
  KidActive(){
    this.MenDropdown = false;
    this.WomenDropdown = false;
    this.KidsDropdown = true;
    this.CollectionDropdown = false;
  }
  CollectionActive(){
    this.MenDropdown = false;
    this.WomenDropdown = false;
    this.KidsDropdown = false;
    this.CollectionDropdown = true;
  }
}
