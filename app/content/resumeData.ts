// content/resumeData.js
export const resumeData = {
  profile: {
    name: "ธนชัย โห้นา",
    image: "/images/profile.jpg",
    role: "Web & Mobile Developer",
    contact: {
      phone: "065-506-8518",
      email: "tarmsrch159@gmail.com",
      location: "Thailand"
    },
    bio: "Developer ที่ชอบ Web และ Mobile มีความสามารถใช้ Flutter, React, Vue, Laravel, MySQL, postgreSQL, และ Node.js เพื่อสร้างระบบครบวงจร UI/UX ใช้งานง่าย ชอบทำงานเป็นทีมและปรับตัวเร็ว พร้อมช่วยองค์กรในการพัฒนาฟีเจอร์ใหม่และต่อยอดผลิตภัณฑ์",
    graduated: "มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ สุพรรณบุรี",
    links: {
      github: "https://github.com/tarmsrch159",
      gitlab: "https://gitlab.com/tarmsrch159",
      facebook: "https://www.facebook.com/tanachai.hpsp/",
    }
  },
  experience: [
    {
      company: "DE MASTIC Solution",
      role: "Flutter UI Developer",
      period: "ม.ค. 2024 – พ.ย. 2024",
      description: [
        "พัฒนา UI ของ Mobile App ให้รองรับ Responsive และมี Animation",
        "เชื่อมต่อ API (Auth, Product List, User Profile)",
        "จัดการ State Management ด้วย Provider / GetX / Riverpod",
        "สร้าง Reusable Widgets เพื่อลดเวลาการพัฒนาและง่ายต่อการบำรุงรักษา"
      ]
    }
  ],
  skills: {
    mobile: ["Flutter", "Dart", "Provider", "Firebase"],
    web: ["Vue JS", "React.js", "Laravel", "Node.js", "HTML5/CSS3", "JavaScript (ES6+)"],
    database: ["MySQL", "phpMyAdmin", "postgreSQL"],
  },
  projects: [
    {
      title: "Crypto Exchange App",
      tech: "Flutter, Firebase",
      details: "พัฒนา UI/UX ให้ Responsive ตาม Mockup และเชื่อมต่อ REST API พร้อมจัดการ State ด้วย Provider"
    },
    {
      title: "ระบบมาตรฐานฝีมือแรงงาน",
      tech: "React.js, Node.js, MySQL",
      details: "Full-stack Project จัดการระบบ CRUD และเชื่อมต่อ API ระหว่าง React และ Node.js/Express"
    },
    {
      title: "Ecommerce Platform",
      tech: "Vue, Laravel, MySQL",
      details: "พัฒนาระบบ Ecommerce ครบวงจร ทั้งส่วน Frontend (Vue) และ Backend API (Laravel)"
    }
  ]
}