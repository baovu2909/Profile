import { Directive, ElementRef, Input, afterNextRender, inject } from '@angular/core';

@Directive({
    selector: '[appCountUp]',
    standalone: true
})
export class CountUpDirective {
    private readonly el = inject(ElementRef<HTMLElement>);

    @Input('appCountUp') target = 0;
    @Input() countSuffix = '';
    @Input() countDuration = 1400;

    constructor() {
        afterNextRender(() => {
            const node = this.el.nativeElement;

            const observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) {
                            this.animate(node);
                            observer.unobserve(node);
                        }
                    }
                },
                { threshold: 0.4 }
            );

            observer.observe(node);
        });
    }

    private animate(node: HTMLElement) {
        const start = performance.now();
        const target = this.target;
        const duration = this.countDuration;

        const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(eased * target);

            node.textContent = `${value}${this.countSuffix}`;

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    }
}
