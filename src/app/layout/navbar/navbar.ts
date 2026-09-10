import { Component, HostListener, inject, signal } from '@angular/core';
import { ENVI } from '../../../environment/environment';
import { I18nService } from '../../core/i18n/i18n.service';

interface NavLink {
    vi: string;
    en: string;
    href: string;
}

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [],
    templateUrl: './navbar.html'
})
export class NavbarComponent {
    readonly i18n = inject(I18nService);

    readonly nickname = ENVI.appInfo.nickname;

    readonly links: NavLink[] = [
        { vi: 'Giới thiệu', en: 'About', href: '#about' },
        { vi: 'Kỹ năng', en: 'Skills', href: '#skills' },
        { vi: 'Hành trình', en: 'Journey', href: '#journey' },
        { vi: 'Dự án', en: 'Projects', href: '#projects' },
        { vi: 'Liên hệ', en: 'Contact', href: '#contact' }
    ];

    readonly scrolled = signal(false);
    readonly menuOpen = signal(false);

    @HostListener('window:scroll')
    onScroll() {
        this.scrolled.set(window.scrollY > 12);
    }

    toggleMenu() {
        this.menuOpen.update((v) => !v);
    }

    closeMenu() {
        this.menuOpen.set(false);
    }
}
