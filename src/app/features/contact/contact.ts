import { Component, inject } from '@angular/core';
import { ENVI } from '../../../environment/environment';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [RevealDirective],
    templateUrl: './contact.html'
})
export class ContactComponent {
    readonly i18n = inject(I18nService);

    readonly address = ENVI.appInfo.address;
    readonly facebookUrl = ENVI.appInfo.facebookUrl;
    readonly youtubeUrl = ENVI.appInfo.youtubeUrl;
    readonly tiktokUrl = ENVI.appInfo.tiktokUrl;
    readonly githubUrl = ENVI.appInfo.githubUrl;
}
