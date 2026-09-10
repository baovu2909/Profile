import { Directive, ElementRef, Input, afterNextRender, inject } from '@angular/core';

@Directive({
    selector: '[appReveal]',
    standalone: true,
    host: {
        class: 'reveal'
    }
})
export class RevealDirective {
    private readonly el = inject(ElementRef<HTMLElement>);

    /** Delay stagger theo index, vd 80ms * i */
    @Input('appReveal') set delayMs(value: number | '' | undefined) {
        if (typeof value === 'number' && value > 0) {
            this.el.nativeElement.style.setProperty('--reveal-delay', `${value}ms`);
        }
    }

    constructor() {
        afterNextRender(() => {
            const node = this.el.nativeElement;

            const observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) {
                            node.classList.add('reveal-visible');
                            observer.unobserve(node);
                        }
                    }
                },
                { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
            );

            observer.observe(node);
        });
    }
}
