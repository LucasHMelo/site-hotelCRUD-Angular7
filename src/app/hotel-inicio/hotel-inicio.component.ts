import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-hotel-inicio',
  templateUrl: './hotel-inicio.component.html',
  styleUrls: ['./hotel-inicio.component.css']
})
export class HotelInicioComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  }

}
