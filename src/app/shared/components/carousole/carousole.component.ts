import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousole',
  templateUrl: './carousole.component.html',
  styleUrls: ['./carousole.component.scss']
})
export class CarousoleComponent implements OnInit {
  public customOptions !:OwlOptions;
  constructor() { }

  ngOnInit(): void {
    this.customOptions= {
      loop: true,
      mouseDrag: true,
      autoWidth: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 3
        },
        940: {
          items: 1
        }
      },
      nav: true
    }
  }
}
