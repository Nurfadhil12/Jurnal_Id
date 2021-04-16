import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
];


export interface PeriodicElement2 {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
];

@Component({
  selector: 'app-assets_management',
  templateUrl: './assets_management.component.html',
  styleUrls: ['./assets_management.component.css']
})
export class Assets_managementComponent {
  /** Based on the screen size, switch from standard to one column per row */
  
  displayedColumns: string[] = ['position','name','weight','symbol',];

  dataSource = ELEMENT_DATA;
  
  displayedColumns2: string[] = ['position','name','weight','symbol',];

  dataSource2 = ELEMENT_DATA2;

  constructor(private breakpointObserver: BreakpointObserver) {}
}
