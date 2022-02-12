import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public images = [
    'assets/images/balloon.jpg',
    'assets/images/coast.jpg',
    'assets/images/forest.jpg',
    'assets/images/island.jpg',
    'assets/images/mountain.jpg',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
