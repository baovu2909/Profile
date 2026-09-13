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
    {
      name: 'Angular',
      icon: 'angular/angular-original.svg',
      descVi: 'Xây dựng SPA với Angular: standalone component, signal, RxJS, reactive forms, routing và HttpClient. Đã dùng để phát triển cả Emolite Music và Emolite Food từ giao diện đến gọi API.',
      descEn: 'Building SPAs with Angular: standalone components, signals, RxJS, reactive forms, routing and HttpClient. Used to build both Emolite Music and Emolite Food end-to-end, from UI to API calls.'
    },
    {
      name: 'TypeScript',
      icon: 'typescript/typescript-original.svg',
      descVi: 'Dùng TypeScript cho toàn bộ dự án Angular: interface, generic, union type, strict mode để bắt lỗi ngay lúc code thay vì runtime.',
      descEn: 'Using TypeScript across every Angular project: interfaces, generics, union types and strict mode to catch bugs while coding instead of at runtime.'
    },
    {
      name: 'JavaScript',
      icon: 'javascript/javascript-original.svg',
      descVi: 'Nắm vững JavaScript hiện đại (ES6+): closure, async/await, thao tác DOM, xử lý sự kiện - nền tảng trước khi học Angular.',
      descEn: 'Solid grasp of modern JavaScript (ES6+): closures, async/await, DOM manipulation, event handling - the foundation before learning Angular.'
    },
    {
      name: 'HTML5',
      icon: 'html5/html5-original.svg',
      descVi: 'Viết HTML semantic (header, nav, section, article), tối ưu SEO cơ bản và chuẩn accessibility (aria, alt, label).',
      descEn: 'Writing semantic HTML (header, nav, section, article), basic SEO structure and accessibility standards (aria, alt, label).'
    },
    {
      name: 'CSS3',
      icon: 'css3/css3-original.svg',
      descVi: 'Responsive layout với Flexbox và Grid, biến CSS, animation/transition mượt mà - chính trang Profile này cũng được style bằng Tailwind trên nền CSS3.',
      descEn: 'Responsive layouts with Flexbox and Grid, CSS variables, smooth animations/transitions - this very Profile site is styled with Tailwind on top of CSS3.'
    },
    {
      name: 'C#',
      icon: 'csharp/csharp-original.svg',
      descVi: 'Lập trình hướng đối tượng với C#, làm quen ASP.NET Core cho backend - viết API, xử lý logic nghiệp vụ phía server.',
      descEn: 'Object-oriented programming with C#, getting hands-on with ASP.NET Core for the backend - writing APIs and handling server-side business logic.'
    },
    {
      name: 'C++',
      icon: 'cplusplus/cplusplus-original.svg',
      descVi: 'Rèn tư duy giải thuật và cấu trúc dữ liệu (mảng, danh sách liên kết, cây, đồ thị) bằng C++ - nền tảng lập trình vững chắc từ những ngày đầu.',
      descEn: 'Sharpened algorithmic thinking and data structures (arrays, linked lists, trees, graphs) with C++ - a solid programming foundation from day one.'
    },
    {
      name: 'PostgreSQL',
      icon: 'postgresql/postgresql-original.svg',
      descVi: 'Thiết kế schema quan hệ, viết query, xử lý transaction và tối ưu index cho các dự án Emolite Music và Food.',
      descEn: 'Designing relational schemas, writing queries, handling transactions and optimizing indexes for the Emolite Music and Food projects.'
    },
    {
      name: 'Git',
      icon: 'git/git-original.svg',
      descVi: 'Quản lý version với Git: branch, merge, pull request, giải quyết conflict khi làm việc nhóm trên GitHub.',
      descEn: 'Managing versions with Git: branching, merging, pull requests, resolving conflicts when collaborating on GitHub.'
    },
    {
      name: 'REST API',
      icon: 'api',
      descVi: 'Thiết kế và tiêu thụ RESTful API: CRUD, xử lý JSON, status code, phân trang - kết nối front-end Angular với backend thực tế.',
      descEn: 'Designing and consuming RESTful APIs: CRUD, JSON handling, status codes, pagination - connecting the Angular front-end to a real backend.'
    },
    {
      name: 'JWT',
      icon: 'jwt',
      descVi: 'Triển khai xác thực bằng JSON Web Token: login, refresh token, bảo vệ route và phân quyền người dùng.',
      descEn: 'Implementing JWT-based authentication: login, refresh tokens, protected routes and role-based access.'
    }
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
