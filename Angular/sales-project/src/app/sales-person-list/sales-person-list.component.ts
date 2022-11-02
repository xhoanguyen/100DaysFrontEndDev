import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  // create an array of sales person objects

  salesPersonList: SalesPerson[] = [
    new SalesPerson('Hoa', 'Nguyen', 'Hoa.Nguyen@gmail.com', 11111),
    new SalesPerson('Kasia', 'Nguyen', 'Kasia.Nguyen@gmail.com', 22222),
    new SalesPerson('Linh', 'Nguyen', 'Linh.Nguyen@gmail.com', 33333),
  ];
  constructor() {}

  ngOnInit(): void {}
}
