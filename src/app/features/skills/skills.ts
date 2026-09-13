import { Component, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ENVI } from '../../../environment/environment';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [RevealDirective],
    templateUrl: './skills.html'
})
export class SkillsComponent {
    private readonly platformId = inject(PLATFORM_ID);
    readonly i18n = inject(I18nService);

    readonly iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
    readonly skills = ENVI.skills;

    readonly selectedIndex = signal<number | null>(null);
    readonly selectedSkill = computed(() => {
        const index = this.selectedIndex();
        return index === null ? null : this.skills[index];
    });
    readonly typedText = signal('');

    private typingToken = 0;

    constructor() {
        effect(() => {
            const skill = this.selectedSkill();

            if (!skill) {
                this.typingToken++;
                this.typedText.set('');
                return;
            }

            const text = this.i18n.t(skill.descVi, skill.descEn);

            if (isPlatformBrowser(this.platformId)) {
                this.playTyping(text);
            } else {
                this.typedText.set(text);
            }
        });
    }

    selectSkill(index: number) {
        this.selectedIndex.update((current) => (current === index ? null : index));
    }

    private playTyping(text: string) {
        const token = ++this.typingToken;
        this.typedText.set('');

        let i = 0;
        const step = () => {
            if (token !== this.typingToken) return;
            this.typedText.set(text.slice(0, i));
            i++;
            if (i <= text.length) {
                setTimeout(step, 16);
            }
        };
        step();
    }
}
