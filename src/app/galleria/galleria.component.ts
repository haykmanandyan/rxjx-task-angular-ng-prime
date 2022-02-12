import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class GalleriaComponent implements OnInit {

  public images = [
    {imgSrc: 'assets/images/balloon.jpg'},
    {imgSrc: 'assets/images/coast.jpg',},
    {imgSrc: 'assets/images/forest.jpg'},
    {imgSrc: 'assets/images/island.jpg'},
    {imgSrc: 'assets/images/mountain.jpg'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
