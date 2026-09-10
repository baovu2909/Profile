export interface ExperienceInfo {
    years: number;
    months: number;
}

/** Tính số năm/tháng kinh nghiệm kể từ mốc đi làm chính thức, tự cập nhật theo ngày hiện tại. */
export function getExperience(joinDateStr: string, now: Date = new Date()): ExperienceInfo {
    const join = new Date(joinDateStr);

    let totalMonths = (now.getFullYear() - join.getFullYear()) * 12 + (now.getMonth() - join.getMonth());
    if (now.getDate() < join.getDate()) totalMonths--;
    totalMonths = Math.max(0, totalMonths);

    return {
        years: Math.floor(totalMonths / 12),
        months: totalMonths % 12
    };
}

export function formatExperience(info: ExperienceInfo, lang: 'vi' | 'en'): string {
    const { years, months } = info;

    if (lang === 'en') {
        if (years === 0 && months === 0) return 'Just getting started';
        if (years === 0) return `${months} mo. of experience`;
        if (months === 0) return `${years}+ years of experience`;
        return `${years} yr ${months} mo. of experience`;
    }

    if (years === 0 && months === 0) return 'Mới bắt đầu';
    if (years === 0) return `${months} tháng kinh nghiệm`;
    if (months === 0) return `${years}+ năm kinh nghiệm`;
    return `${years} năm ${months} tháng kinh nghiệm`;
}
