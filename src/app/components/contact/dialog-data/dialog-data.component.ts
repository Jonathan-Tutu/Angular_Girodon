import { Component,  Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.css']
})
export class DialogDataComponent {

  formvalues_mail : string = "";
  formvalues_firstname : string = "";
  formvalues_lastname : string = "";
  formvalues_message : string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any[]) {

    this.formvalues_mail = Object.values(data)[0]
    this.formvalues_firstname = Object.values(data)[1]
    this.formvalues_lastname = Object.values(data)[2]
    this.formvalues_message = Object.values(data)[3]
  }

}
