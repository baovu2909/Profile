import { Component, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ENVI } from '../../../environment/environment';
import { formatExperience, getExperience } from '../../core/utils/experience.util';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [RevealDirective],
    templateUrl: './hero.html'
})
export class HeroComponent {
    private readonly platformId = inject(PLATFORM_ID);
    readonly i18n = inject(I18nService);

    readonly fullName = ENVI.appInfo.fullName;
    readonly firstName = ENVI.appInfo.firstName;
    readonly initials = ENVI.appInfo.initials;
    readonly roles = ENVI.appInfo.roles;
    readonly githubUrl = ENVI.appInfo.githubUrl;
    readonly facebookUrl = ENVI.appInfo.facebookUrl;
    readonly youtubeUrl = ENVI.appInfo.youtubeUrl;
    readonly tiktokUrl = ENVI.appInfo.tiktokUrl;
    readonly avatarUrl = 'me.jpg';
    readonly imgError = signal(false);

    private readonly experience = getExperience(ENVI.appInfo.companyJoinDate);

    get experienceLabel(): string {
        return formatExperience(this.experience, this.i18n.lang());
    }

    readonly typedText = signal('');

    constructor() {
        afterNextRender(() => {
            if (!isPlatformBrowser(this.platformId)) return;
            this.runTypingLoop();
        });
    }

    private async runTypingLoop() {
        const typeDelay = 70;
        const deleteDelay = 40;
        const holdDelay = 1600;

        // eslint-disable-next-line no-constant-condition
        while (true) {
            for (const role of this.roles) {
                await this.typeWord(role, typeDelay);
                await this.wait(holdDelay);
                await this.deleteWord(deleteDelay);
                await this.wait(300);
            }
        }
    }

    private typeWord(word: string, delay: number) {
        return new Promise<void>((resolve) => {
            let i = 0;
            const step = () => {
                this.typedText.set(word.slice(0, i));
                i++;
                if (i <= word.length) {
                    setTimeout(step, delay);
                } else {
                    resolve();
                }
            };
            step();
        });
    }

    private deleteWord(delay: number) {
        return new Promise<void>((resolve) => {
            const step = () => {
                this.typedText.update((current) => {
                    const next = current.slice(0, -1);
                    if (next.length > 0) {
                        setTimeout(step, delay);
                    } else {
                        resolve();
                    }
                    return next;
                });
            };
            step();
        });
    }

    private wait(ms: number) {
        return new Promise<void>((resolve) => setTimeout(resolve, ms));
    }
}
