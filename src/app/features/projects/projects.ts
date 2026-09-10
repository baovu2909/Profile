import { Component, inject } from '@angular/core';
import { ENVI } from '../../../environment/environment';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../shared/directives/spotlight.directive';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [RevealDirective, SpotlightDirective],
    templateUrl: './projects.html'
})
export class ProjectsComponent {
    readonly i18n = inject(I18nService);
    readonly projects = ENVI.projects;
    readonly githubUrl = ENVI.appInfo.githubUrl;
    readonly githubOrganizeUrl = ENVI.appInfo.githubOrganizeUrl;
}
