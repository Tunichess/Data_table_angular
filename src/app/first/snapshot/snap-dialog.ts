import {Component, ElementRef, Inject, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'snap-dialog',
  templateUrl: 'snap-dialog.html',
  styleUrls:['../first.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SnapDialog {
  constructor(public dialogRef: MatDialogRef<SnapDialog>,
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
      name: 'Snapshot 1',
      date:Date.now(),
      id:1
    },
    {
      name: 'Snapshot 2',
      date:Date.now(),
      id:2
    },
    {
      name: 'Snapshot 3',
      date:Date.now(),
      id:3
    }
  ];
  selectedParent: any;
  selectedChildren: any;
  selectedRight:any;
  selectParent(parentname:Number)
  {
    console.log(parentname);
    if(this.selectedParent==parentname)
    {
      console.log("true");

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
    this.typesOfShoes.push(this.folders[this.selectedParent-1].name+' '+this.folders[this.selectedParent-1].date+' '+this.folders[this.selectedParent-1].id);
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
