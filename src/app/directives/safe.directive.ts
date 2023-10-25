import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Directive({
  selector: '[safeUrl]'
})
export class SafeUrlDirective {
  @Input() set safeUrl(value: string) {
    const safeResourceUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(value);
    this.renderer.setProperty(this.el.nativeElement, 'src', safeResourceUrl);
  }

  constructor(private el: ElementRef, private renderer: Renderer2, private sanitizer: DomSanitizer) {}
}
