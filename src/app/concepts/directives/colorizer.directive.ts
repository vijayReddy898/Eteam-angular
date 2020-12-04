import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// This is an attibute directive
// Decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {
  
  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { // dependency injection
    console.log(`Inside Constructor of ColorizerDirective`);
    console.log(this.elRef.nativeElement);

    // changing the bgColor, color using JS
    const el = this.elRef.nativeElement;
    // el.style.backgroundColor = 'yellow';
    // el.style.color = 'blue';

    this.renderer.setStyle(el, 'background-color', 'yellow');
    this.renderer.setStyle(el, 'color', 'blue');
    this.renderer.setStyle(el, 'height', '100px');

    // todo: increase the height of this div by using setStyle
    // todo: create a <p> element and have a text 'Success' inside.
    //       append the <p> element into the div.
    const p = this.renderer.createElement('p');
    const text = this.renderer.createText('Success');
    this.renderer.appendChild(p, text);
    this.renderer.appendChild(el, p);

  }

  @HostListener('click', ['$event'])
  onClickHandler(evt): void{
    this.renderer.setStyle(evt.target, 'background-color', 'green');
  }

}
