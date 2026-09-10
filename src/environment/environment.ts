export const ENVI = {
  production: false,
  appInfo: {
    fullName: 'Vũ Quốc Bảo',
    firstName: 'Bảo',
    shortName: 'Bảo Vũ',
    nickname: 'EMOLITE',
    initials: 'ANM',
    role: 'Software Developer',
    roles: ['Software Developer', 'Angular Developer', 'IT Student'],
    birthYear: 2005,
    address: 'Đồng Nai, Việt Nam',
    phoneNumber: '0362488116',
    school: 'Trường Cao Đẳng Công Nghệ & Quản Trị Sonadezi',
    nextSchool: 'Trường Đại học Công nghệ Thông tin (UIT) - ĐHQG TP.HCM',
    companyJoinDate: '2026-03-01',
    githubUsername: 'baovu2909',
    githubUrl: 'https://github.com/baovu2909',
    githubOrganizeUrl: 'https://github.com/ANM-EMOLITE',
    facebookUrl: 'https://www.facebook.com/bao.vu.825261?locale=vi_VN',
    youtubeUrl: 'https://www.youtube.com/@QBao2005',
    tiktokUrl: 'https://www.tiktok.com/@amlwaifuraidenei',
    musicSiteUrl: 'https://emolite.id.vn/',
    foodSiteUrl: 'https://food-emolite.vercel.app/'
  },
  skills: [
    { name: 'Angular', icon: 'angular/angular-original.svg' },
    { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'html5/html5-original.svg' },
    { name: 'CSS3', icon: 'css3/css3-original.svg' },
    { name: 'C#', icon: 'csharp/csharp-original.svg' },
    { name: 'C++', icon: 'cplusplus/cplusplus-original.svg' },
    { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
    { name: 'Git', icon: 'git/git-original.svg' },
    { name: 'REST API', icon: 'api' },
    { name: 'JWT', icon: 'jwt' }
  ],
  projects: [
    {
      key: 'music',
      name: 'Emolite Music',
      tagline: {
        vi: 'Nghe nhạc trực tuyến kiểu ZingMP3',
        en: 'ZingMP3-style music streaming'
      },
      description: {
        vi: 'Website nghe nhạc trực tuyến: nghe theo playlist, nghệ sĩ, hàng đợi phát nhạc, xác thực người dùng bằng JWT và dữ liệu quản lý qua REST API.',
        en: 'Online music streaming site: playlists, artists, playback queue, JWT authentication and data managed through a REST API.'
      },
      tags: ['Angular', 'REST API', 'JWT', 'PostgreSQL'],
      url: 'https://emolite.id.vn/',
      githubUrl: 'https://github.com/ANM-EMOLITE/MusicEmolite',
      accent: 'violet'
    },
    {
      key: 'food',
      name: 'Emolite Food',
      tagline: {
        vi: 'Đặt món ăn trực tuyến',
        en: 'Online food ordering'
      },
      description: {
        vi: 'Website đặt món cho khách hàng: chọn món, giỏ hàng, theo dõi đơn hàng theo thời gian thực, xác thực bằng JWT và backend REST API.',
        en: 'Online ordering site for customers: menu selection, cart, real-time order tracking, JWT authentication and a REST API backend.'
      },
      tags: ['Angular', 'REST API', 'JWT', 'PostgreSQL'],
      url: 'https://food-emolite.vercel.app/',
      githubUrl: 'https://github.com/ANM-EMOLITE/FoodEmolite',
      accent: 'fuchsia'
    }
  ]
};
