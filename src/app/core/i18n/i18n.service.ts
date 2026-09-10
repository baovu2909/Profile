import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Lang = 'vi' | 'en';

const STORAGE_KEY = 'profile-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
    private readonly platformId = inject(PLATFORM_ID);

    readonly lang = signal<Lang>('vi');

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'vi' || saved === 'en') {
                this.lang.set(saved);
            }
        }
    }

    toggle() {
        this.setLang(this.lang() === 'vi' ? 'en' : 'vi');
    }

    setLang(next: Lang) {
        this.lang.set(next);

        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(STORAGE_KEY, next);
        }
    }

    /** Trả về bản dịch phù hợp với ngôn ngữ hiện tại. */
    t(vi: string, en: string): string {
        return this.lang() === 'vi' ? vi : en;
    }
}
