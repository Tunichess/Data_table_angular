import {Component, ElementRef, Inject, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'dimesion-dialog',
  templateUrl: 'dimension-dialog.html',
  styleUrls:['../first.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DimensionDialog {
  @ViewChild('shoes') shoeValue;
  constructor(public dialogRef: MatDialogRef<DimensionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,){
      console.log(this.data);
      if(this.data!==null && this.data!==undefined)
      {
        this.typesOfShoes=this.data;
      }


  }
  typesOfShoes = [];
  folders: any[] = [
    {
      name: 'Person',
      children:["Name","Age","Gender"]
    },
    {
      name: 'Shape',
      children:["Rectangle","Circle","Triangle"]
    },
    {
      name: 'Transport',
      children:["Cars","Bicycle","SUVs"]
    }
  ];
  selectedParent: any;
  selectedChildren: any;
  selectedRight:any;
  selectParent(parentname)
  {
    console.log(parentname);
    if(this.selectedParent==parentname)
    {
      this.selectedParent="";
      return;
    }
    this.selectedParent=parentname;
  }
  selectChildren(childrenname)
  {
    if(this.selectedChildren==childrenname)
    {
      this.selectedChildren="";
      return;
    }
    this.selectedChildren=childrenname;
  }
  moveToRight(){
    this.typesOfShoes.push(this.selectedParent+'.'+this.selectedChildren);
    this.selectedChildren="";
  }
  moveToLeft(){
    console.log(this.selectedRight);

    var index=this.typesOfShoes.indexOf(this.selectedRight);
    this.typesOfShoes.splice(index,1);
    this.selectedRight="";
  }
  selectRight(shoe)
  {
    console.log(shoe);

    this.selectedRight=shoe;
  }
  closeDialog()
  {
    this.dialogRef.close({  data: this.typesOfShoes });
  }
}
