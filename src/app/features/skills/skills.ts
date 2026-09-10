import { Component, inject } from '@angular/core';
import { ENVI } from '../../../environment/environment';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../shared/directives/spotlight.directive';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [RevealDirective, SpotlightDirective],
    templateUrl: './skills.html'
})
export class SkillsComponent {
    readonly i18n = inject(I18nService);
    readonly iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
    readonly skills = ENVI.skills;
}
