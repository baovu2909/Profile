import { Component, inject } from '@angular/core';
import { ENVI } from '../../../environment/environment';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.html'
})
export class FooterComponent {
    readonly i18n = inject(I18nService);

    readonly ownerName = ENVI.appInfo.fullName;
    readonly nickname = ENVI.appInfo.nickname;
    readonly phoneNumber = ENVI.appInfo.phoneNumber;
    readonly address = ENVI.appInfo.address;
    readonly musicSiteUrl = ENVI.appInfo.musicSiteUrl;
    readonly foodSiteUrl = ENVI.appInfo.foodSiteUrl;
    readonly facebookUrl = ENVI.appInfo.facebookUrl;
    readonly youtubeUrl = ENVI.appInfo.youtubeUrl;
    readonly tiktokUrl = ENVI.appInfo.tiktokUrl;
    readonly githubUrl = ENVI.appInfo.githubUrl;

    readonly quickLinks = [
        { vi: 'Giới thiệu', en: 'About', href: '#about' },
        { vi: 'Kỹ năng', en: 'Skills', href: '#skills' },
        { vi: 'Hành trình', en: 'Journey', href: '#journey' },
        { vi: 'Dự án', en: 'Projects', href: '#projects' }
    ];

    readonly currentYear = new Date().getFullYear();
}
