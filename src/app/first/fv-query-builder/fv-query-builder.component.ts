import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {QueryBuilderComponent} from"angular2-query-builder";
@Component({
  selector: 'app-fv-query-builder',
  templateUrl: './fv-query-builder.component.html',
  styleUrls: ['./fv-query-builder.component.scss']
})
export class FvQueryBuilderComponent extends QueryBuilderComponent implements OnInit {

  constructor(ref:ChangeDetectorRef) {
    super(ref); 
  }

  ngOnInit() {
  }

}