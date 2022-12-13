import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

    pattern = "^[a-zA-Z0-9]{1,64}@[a-zA-Z0-9]{1,64}.[a-zA-Z0-9]{1,3}" ;
    addressForm = this.fb.group({
    mail: [null, Validators.required, Validators.pattern],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    textArea: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert(this.addressForm.value.mail);
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
