import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MaterialModule  } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { FirstComponent } from './first/first.component';
import { DimensionDialog } from "./first/dimension/dimension-dialog";
import { SnapDialog } from "./first/snapshot/snap-dialog";
import { MeasureDialog } from "./first/measures/measures-dialog";
import { QueryDialog } from "./first/query/query-dialog";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryBuilderModule } from "angular2-query-builder";
import { FvQueryBuilderComponent } from './first/fv-query-builder/fv-query-builder.component';

import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview';
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { GroupingBarService , FieldListService,CalculatedFieldService} from '@syncfusion/ej2-angular-pivotview';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FvQueryBuilderComponent,
    QueryDialog,
    DimensionDialog,
    SnapDialog,
    MeasureDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    QueryBuilderModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    PivotViewAllModule,
    PivotFieldListAllModule,
    PivotViewModule


  ],
  // entryComponents:[DimensionDialog],
  providers: [ GroupingBarService , FieldListService,CalculatedFieldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
