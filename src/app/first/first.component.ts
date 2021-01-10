import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DimensionDialog } from './dimension/dimension-dialog';
import { MeasureDialog } from './measures/measures-dialog';
import { QueryDialog } from './query/query-dialog';
import { SnapDialog } from './snapshot/snap-dialog';


import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
// import { Pivot_Data } from './datasource.ts';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  checked:boolean;
  checked1:boolean;
  checked2:boolean;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource:any;
  dimensionList=[];
  snapList: any;
  measureList: any;
  sortList: any;

  public width: string;
  public dataSourceSettings: IDataOptions;
  public gridSettings: GridSettings;

  getPivotData(): IDataSet[] {
    let pivotData: IDataSet[] = [
      { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
      { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
      { 'Sold': 75, 'Amount': 127800, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
      { 'Sold': 16, 'Amount': 23989, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
      { 'Sold': 31, 'Amount': 49460.5, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
      { 'Sold': 76, 'Amount': 129504, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
      { 'Sold': 77, 'Amount': 131208, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
      { 'Sold': 30, 'Amount': 44975, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
      { 'Sold': 45, 'Amount': 71797.5, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    ];
    return pivotData;
  }


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.gridSettings = {
      columnWidth: 140
    } as GridSettings;
    this.dataSourceSettings = {
      enableSorting: true,
      columns: [{ name: 'Year' }, { name: 'Quarter' }],
      values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
      dataSource: this.getPivotData(),
      rows: [{ name: 'Country' }, { name: 'Products' }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      expandAll: false,
      filters: [],
    };
  }

  openDialog() {
    const dialogRef = this.dialog.open(DimensionDialog,{
      width:'900px',
      height:'690px',
      data:this.dimensionList
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dimensionList=result.data;
      console.log(result);

      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogSnap() {
    const dialogRef = this.dialog.open(SnapDialog,{
      width:'900px',
      height:'690px',
      data:this.snapList
    });

    dialogRef.afterClosed().subscribe(result => {
      this.snapList=result.data;
      console.log(result);

      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogMeasure() {
    const dialogRef = this.dialog.open(MeasureDialog,{
      width:'900px',
      height:'690px',
      data:this.measureList
    });

    dialogRef.afterClosed().subscribe(result => {
      this.measureList=result.data;
      console.log(result);

      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogSort() {
    const dialogRef = this.dialog.open(QueryDialog,{
      width:'900px',
      height:'690px',
      data:this.sortList
    });

    dialogRef.afterClosed().subscribe(result => {
      this.sortList=result.data;
      console.log(result);

      console.log(`Dialog result: ${result}`);
    });
  

   
}
}
