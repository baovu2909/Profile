import { Component, inject } from '@angular/core';
import { ENVI } from '../../../environment/environment';
import { formatExperience, getExperience } from '../../core/utils/experience.util';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [RevealDirective, CountUpDirective],
    templateUrl: './about.html'
})
export class AboutComponent {
    readonly i18n = inject(I18nService);

    readonly school = ENVI.appInfo.school;
    readonly nextSchool = ENVI.appInfo.nextSchool;
    private readonly experience = getExperience(ENVI.appInfo.companyJoinDate);
    readonly age = new Date().getFullYear() - ENVI.appInfo.birthYear;

    get experienceLabel(): string {
        return formatExperience(this.experience, this.i18n.lang());
    }

    readonly numericStats = [
        { value: this.age, suffix: '', vi: 'Tuổi', en: 'Years old' },
        { value: 2, suffix: '', vi: 'Dự án cá nhân', en: 'Personal projects' },
        { value: 11, suffix: '+', vi: 'Công nghệ sử dụng', en: 'Technologies used' }
    ];

    readonly tags = [
        { vi: 'Chăm học hỏi', en: 'Eager to learn' },
        { vi: 'Thích build sản phẩm thật', en: 'Loves building real products' },
        { vi: 'Đam mê coding', en: 'Passionate about coding' }
    ];
}
