import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Create HTML form tag equivalent in TS
  addContactForm: FormGroup;
  isSaved: boolean;

  constructor(private contactService: ContactService) { // 1. connect to the service - using dependency injection

  }

  ngOnInit(): void {
    // Step 1: continues...
    this.addContactForm = new FormGroup({
      // Step 2: Create HTML input equivalents in TS
      name: new FormControl('a', Validators.required), // Step 5: work on validations
      phone: new FormControl('32423', Validators.required),
      email: new FormControl('a@b.com', [Validators.required, Validators.email])
    });
  }

  async addContactHandler(): Promise<void> {
    console.log(this.addContactForm.value);

    // 2. send the above data to the service
    const status: Contact = await this.contactService.createContact(this.addContactForm.value);
    console.log(status);
    if (status && status.id) {
      this.isSaved = true;
    }

  }

}
