import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: Create Custom Event
    //  1.1. Create an object of EventEmitter class
  @Output() profileLoaded = new EventEmitter(); //  1.2  Make the obj as custom event -- @Output() makes it a custom event

  personName = 'Arun';

  constructor() {
    console.log('Inside CebComponent constructor');
  }

  ngOnInit(): void {
    console.log('Inside CebComponent ngOnInit');
  }

  onLoadProfile(event): void{
    event.target.innerText = 'Loading Profile...';
    // mocking an ajax call
    setTimeout( () => {
      console.log('Data sent to parent comp is: Arun');
      event.target.innerText = 'Loaded Profile...';
      // Step 2: Emit that custom event thru program
      this.profileLoaded.emit(this.personName); // Step 3: Along with the emitted event, Send data to the parent comp
      // Refer this comp's html for Step 4 of CEB
    }, 5000);
  }

}
