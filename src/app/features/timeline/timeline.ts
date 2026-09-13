import { Component, inject, signal } from '@angular/core';
import { ENVI } from '../../../environment/environment';
import { formatExperience, getExperience } from '../../core/utils/experience.util';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { I18nService } from '../../core/i18n/i18n.service';

interface TimelineItem {
    key: string;
    status: 'done' | 'current' | 'upcoming';
    statusLabel: { vi: string; en: string };
    title: string;
    subtitle: { vi: string; en: string };
    description: { vi: string; en: string };
    icon: 'school' | 'briefcase' | 'rocket';
    imageUrl?: string;
    fbUrl?: string;
    fbLabel?: string;
}

@Component({
    selector: 'app-timeline',
    standalone: true,
    imports: [RevealDirective],
    templateUrl: './timeline.html'
})
export class TimelineComponent {
    readonly i18n = inject(I18nService);

    private readonly experience = getExperience(ENVI.appInfo.companyJoinDate);

    readonly expandedKey = signal<string | null>(null);

    toggleExpand(key: string) {
        this.expandedKey.update((current) => (current === key ? null : key));
    }

    isExpanded(key: string) {
        return this.expandedKey() === key;
    }

    get items(): TimelineItem[] {
        const experienceLabel = {
            vi: formatExperience(this.experience, 'vi'),
            en: formatExperience(this.experience, 'en')
        };

        return [
            {
                key: 'sonadezi',
                status: 'done',
                statusLabel: { vi: 'Nền tảng', en: 'Foundation' },
                title: ENVI.appInfo.school,
                subtitle: { vi: 'Trung học phổ thông', en: 'High school' },
                description: {
                    vi: 'Nơi bắt đầu làm quen với lập trình và nuôi dưỡng đam mê công nghệ từ những dòng code đầu tiên.',
                    en: 'Where it all began — getting familiar with programming and nurturing a passion for technology from the very first lines of code.'
                },
                icon: 'school',
                imageUrl: 'sonadezi.png',
                fbUrl: 'https://www.facebook.com/profile.php?id=100054297349738',
                fbLabel: 'Sonadezi'
            },
            {
                key: 'job',
                status: 'current',
                statusLabel: { vi: 'Hiện tại', en: 'Current' },
                title: 'Software Developer',
                subtitle: experienceLabel,
                description: {
                    vi: 'Đi làm chính thức, trực tiếp xây dựng sản phẩm với Angular, REST API, JWT và PostgreSQL trong môi trường doanh nghiệp thật.',
                    en: 'Working full-time, building real products with Angular, REST APIs, JWT and PostgreSQL in a real business environment.'
                },
                icon: 'briefcase'
            },
            {
                key: 'uit',
                status: 'upcoming',
                statusLabel: { vi: 'Sắp tới', en: 'Upcoming' },
                title: ENVI.appInfo.nextSchool,
                subtitle: { vi: 'Đại học', en: 'University' },
                description: {
                    vi: 'Tiếp tục đào sâu kiến thức nền tảng Công nghệ thông tin, mở rộng tư duy hệ thống và chuyên môn kỹ thuật.',
                    en: 'Continuing to deepen foundational Computer Science knowledge, broadening systems thinking and technical expertise.'
                },
                icon: 'rocket',
                imageUrl: 'uit.jpg',
                fbUrl: 'https://www.facebook.com/UIT.Fanpage',
                fbLabel: 'UIT'
            }
        ];
    }
}
