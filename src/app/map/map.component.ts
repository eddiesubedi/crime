import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{

  constructor(private httpClient: HttpClient){

  }

  ngOnInit() {
    const zipCode:number = 95616;

    let map = L.map('map').setView([38.54877254320706, -121.76961899567628], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);
  }
}
