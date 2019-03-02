import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {    
  }

  @Input('appHighlight') highlightColor: string;

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') onmouseenter(){
    this.highlight(this.highlightColor)
  }

  @HostListener('mouseleave') onmouseleave(){
    this.highlight(null);
  }
}
