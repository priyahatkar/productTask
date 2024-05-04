import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  Menkeywords: string[] = [`Men's footwear`,`Men's Running Shoes`,` Men's Walking Shoes`,` Men's Casual Shoes`,` Men's Sports shoes `,`Men's Walking Shoes `,`Men's Casual Shoes`,` Men's Sports shoes `,`Men's Sneakers `,`Men's Casual Sandals `,`Men's Sports Sandals`,` Men's Flip Flops & `,`Slides `,`Men's Flip Flops`,` Men's Slides`];
  Womenkeywords: string[] =[`Women's Footwear`,` Women's Running Shoes `,`Women's Casual Shoes `,`Women's Sports Shoes `,`Sneakers `,`Women's Casual Sandal `,`Women's Sports Sandal`,` Women's Flip Flops &`,` Slides`,`Women's Flip Flops `,`Women's Slides`];

  Kidskeywords: string[] =[`Kid's footwear `,` Kid's Running Shoes `,`Kid's Walking Shoes `,` Kid's Casual Shoes `,` Kid's School Shoes`,` Kid's Sports Shoes `,` Kid's Sandals & `,` Floaters `,` Kid's Casual Sandals `,`Kid's Sports Sandals `,`Kid's Flip Flops & `,`Slides `,`Kid's Flip Flops`];
  constructor() { }

  ngOnInit(): void {
  }

}
