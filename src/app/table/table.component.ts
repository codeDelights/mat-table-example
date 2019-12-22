import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

const dataSourceDB = [
  {
    seqNo: 1,
    description: 'I am One',
    status: 'pending'
  },
  {
    seqNo: 2,
    description: 'I am Two',
    status: 'completed'
  },
  {
    seqNo: 3,
    description: 'I am Three',
    status: 'cancelled'
  },
  {
    seqNo: 4,
    description: 'I am Four',
    status: 'disabled'
  },
  {
    seqNo: 5,
    description: 'I am Five',
    status: 'completed'
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns = ['seqNo', 'description', 'duration'];
  dataSource = new MatTableDataSource<any>(dataSourceDB);

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
