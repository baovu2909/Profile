<div align="center">

# 🟣 PROFILE

**Trang portfolio cá nhân của Vũ Quốc Bảo — xây dựng bằng Angular, phong cách dark/purple, hiệu ứng chuyển động mượt mà**

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

</div>

---

## 📋 Mục lục

- [Giới thiệu](#-giới-thiệu)
- [Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
- [Cài đặt](#-cài-đặt)
- [Chạy ứng dụng (Development)](#-chạy-ứng-dụng-development)
- [Build cho Production](#-build-cho-production)
- [Chạy bản SSR sau khi build](#-chạy-bản-ssr-sau-khi-build)
- [Các lệnh thường dùng](#-các-lệnh-thường-dùng)
- [Xử lý lỗi thường gặp](#-xử-lý-lỗi-thường-gặp)
- [Cấu trúc thư mục](#-cấu-trúc-thư-mục)
- [Liên hệ](#-liên-hệ)

---

## 📖 Giới thiệu

Đây là trang **Profile** cá nhân, xây dựng bằng **Angular** (kèm Server-Side Rendering) và **Tailwind CSS**,
gồm các phần: giới thiệu bản thân, kỹ năng, hành trình học vấn/kinh nghiệm, dự án cá nhân và liên hệ.

Số năm/tháng kinh nghiệm ở phần "Hành trình" được **tự động tính toán** dựa trên mốc thời gian bắt đầu
đi làm chính thức (`src/environment/environment.ts`), không cần cập nhật tay theo thời gian.

---

## ⚙️ Yêu cầu hệ thống

| Công cụ | Phiên bản khuyến nghị | Kiểm tra bằng lệnh |
|---|---|---|
| **Node.js** | >= 20.x (LTS) | `node -v` |
| **npm** | >= 10.x (đi kèm Node.js) | `npm -v` |
| **Angular CLI** | >= 22.x | `ng version` |
| **Git** | bất kỳ | `git --version` |

> 💡 **Ghi chú:**
> - Nếu chưa có Node.js, tải tại: https://nodejs.org/
> - Nếu chưa có Angular CLI, cài bằng lệnh: `npm install -g @angular/cli`

---

## 📥 Cài đặt

### Bước 1 — Clone (hoặc tải) dự án về máy

```bash
git clone <repository-url>
```

Sau khi clone xong, mở thư mục dự án bằng VS Code:

1. Vào thư mục dự án vừa tải về
2. Click vào **thanh địa chỉ (URL)** trên cùng của cửa sổ File Explorer/Finder
3. Gõ `code .` rồi nhấn **Enter**

> ⚠️ Nếu gõ `code .` mà không có tác dụng, nghĩa là VS Code chưa được thêm vào PATH. Cách khắc phục: mở VS Code → nhấn `Ctrl+Shift+P` → gõ **"Shell Command: Install 'code' command in PATH"** → chọn nó → khởi động lại terminal/File Explorer.

### Bước 2 — Cài đặt các gói phụ thuộc (dependencies)

```bash
npm install
```

Lệnh này sẽ đọc file `package.json` và tự động tải toàn bộ thư viện cần thiết cho dự án (Angular, Tailwind CSS...).

> ⏳ Lần cài đầu tiên có thể mất vài phút tùy vào tốc độ mạng.

---

## 💻 Chạy ứng dụng (Development)

```bash
npm start
```

hoặc

```bash
ng serve
```

Sau khi chạy, mở trình duyệt và truy cập:

```
http://localhost:4200
```

✅ Ứng dụng sẽ tự động **reload lại** mỗi khi bạn lưu thay đổi trong code (hot reload).

---

## 📦 Build cho Production

```bash
ng build
```

File build sẽ nằm trong thư mục:

```
dist/PROFILE/
```

---

## 🚀 Chạy bản SSR sau khi build

Sau khi `ng build`, dự án có thể chạy dưới dạng server Node.js (Server-Side Rendering):

```bash
npm run serve:ssr:PROFILE
```

---

## 🛠️ Các lệnh thường dùng

| Lệnh | Mục đích |
|---|---|
| `npm install` | Cài đặt toàn bộ thư viện của dự án |
| `npm start` / `ng serve` | Chạy ứng dụng ở chế độ development |
| `ng build` | Build ứng dụng cho production |
| `npm run serve:ssr:PROFILE` | Chạy server SSR từ bản build |
| `npm test` / `ng test` | Chạy unit test (Vitest) |
| `ng generate component ten-component` | Sinh nhanh một component mới |

---

## 🐞 Xử lý lỗi thường gặp

<details>
<summary><b>❌ Lỗi: Không chạy được lệnh (npm/ng) trong Terminal của VS Code (PowerShell báo lỗi đỏ)</b></summary>

Đây là lỗi rất hay gặp trên **Windows**, do PowerShell **chặn chạy script** theo mặc định. Thường sẽ thấy dòng lỗi kiểu:

```
... cannot be loaded because running scripts is disabled on this system ...
```

**Cách khắc phục:**

1. Mở **PowerShell với quyền Administrator** (nhấn phím Windows → gõ "PowerShell" → chuột phải chọn **"Run as administrator"**)
2. Gõ lệnh sau rồi nhấn **Enter**:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

3. Khi được hỏi xác nhận, gõ `Y` rồi nhấn **Enter**
4. **Đóng và mở lại VS Code** (hoặc mở lại Terminal trong VS Code)
5. Thử chạy lại `npm start` hoặc `ng serve` — lúc này sẽ chạy bình thường

> 💡 Lệnh trên chỉ cho phép chạy các script đã được ký (hoặc script bạn tự tạo trên máy), an toàn hơn so với việc tắt hoàn toàn bảo mật bằng `Unrestricted`.
</details>

<details>
<summary><b>❌ Lỗi: "ng: command not found"</b></summary>

Bạn chưa cài Angular CLI toàn cục. Chạy lệnh:

```bash
npm install -g @angular/cli
```
</details>

<details>
<summary><b>❌ Cổng 4200 đã bị chiếm dụng</b></summary>

Chạy ở cổng khác bằng lệnh:

```bash
ng serve --port 4300
```
</details>

---

## 📁 Cấu trúc thư mục

```
├── src/
│   ├── app/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── features/        # Hero, About, Skills, Timeline, Projects, Contact
│   │   ├── core/             # Utils (tính kinh nghiệm...)
│   │   └── shared/           # Directives dùng chung (reveal, spotlight, count-up)
│   ├── environment/          # Thông tin cá nhân, kỹ năng, dự án (environment.ts)
│   ├── styles.css            # Theme màu, animation, font
│   └── index.html
├── dist/                     # Kết quả build (sau khi chạy `ng build`)
├── angular.json
├── package.json
└── README.md
```

---

## 📮 Liên hệ

- GitHub: [github.com/baovu2909](https://github.com/baovu2909)
- Facebook: [fb.com/bao.vu.825261](https://www.facebook.com/bao.vu.825261?locale=vi_VN)
- YouTube: [@QBao2005](https://www.youtube.com/@QBao2005)

---

<div align="center">

Made with 💜 by Emolite

</div>
