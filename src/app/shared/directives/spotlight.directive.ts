import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
    selector: '[appSpotlight]',
    standalone: true,
    host: {
        class: 'spotlight-card'
    }
})
export class SpotlightDirective {
    private readonly el = inject(ElementRef<HTMLElement>);

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        const rect = this.el.nativeElement.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        this.el.nativeElement.style.setProperty('--x', `${x}%`);
        this.el.nativeElement.style.setProperty('--y', `${y}%`);
    }
}
