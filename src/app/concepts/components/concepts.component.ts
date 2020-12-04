import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
      .brownText{
        color: brown;
      }
    `
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit {

  // string interpolation related
  appName = 'Contact Manager App!';
  noOfDevelopers = 10;

  // property binding
  averageExp = 2;

  // for ngStyle
  myStyles: any = {
    backgroundColor: 'yellow',
    color: 'black'
  };

  // two way binding related
  courseName = 'Angular';

  dataReceivedFromChildComp: string;

  // if static true -- the data would be available in ngOnInit lifecycle hook
  @ViewChild(CebComponent, { static: true }) cebData: CebComponent;
  // if static false -- the data would be available in ngAfterViewInit lifecycle hook
  // @ViewChild(CebComponent, { static: false }) cebData: CebComponent;

  // *ngIf related
  isLoggedIn: boolean;

  // *ngFor related
  skillList: string[] = [
    'HTML', 'CSS', 'JS'
  ];

  constructor() {
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    console.log(this.cebData);
  }

  ngAfterViewInit(): void {
    console.log('Inside ngAfterViewInit');
    console.log(this.cebData);
  }

  // event binding related
  clickMeHandler(event: any): void {
    console.log(event);
    event.target.innerText = 'Clicked';
    event.target.disabled = true;
  }

  profileLoadedHandler(event): void {
    // Step 5: Display it somewhere in parent comp
    alert('inside parent comp');
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }
}
