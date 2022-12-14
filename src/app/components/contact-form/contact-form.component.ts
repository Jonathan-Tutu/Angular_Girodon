import { Component } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
import { MatDialog} from '@angular/material/dialog';
import { DialogDataComponent } from '../dialog-data/dialog-data.component';

@Component({
  selector: 'contact',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {

    pattern = "^[a-zA-Z0-9-.]{1,64}@[a-zA-Z0-9]{1,64}.[a-zA-Z0-9]{1,3}" ;

    form = this.fb.group({
    mail: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    textArea: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  OnSubmit(): void {
    if(this.form.valid)
    {
      this.dialog.open(DialogDataComponent, 
      {
        data: {
          mail: this.form.value.mail,
          firstname: this.form.value.firstName,
          lastname: this.form.value.lastName,
          message: this.form.value.textArea
        },
      });
    }
  }

}
