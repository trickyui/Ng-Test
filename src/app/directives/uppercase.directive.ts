import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(private el: ElementRef) { }
  
  @HostListener('blur') onblur() {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase()
  }
 

}
