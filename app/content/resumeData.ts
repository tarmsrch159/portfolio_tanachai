// content/resumeData.js
export const resumeData = {
  profile: {
    name: "profile.name",
    image: "/images/profile.jpg",
    roleKey: "profile.role",
    bioKey: "profile.bio",
    graduatedKey: "profile.graduated",
    contact: {
      phone: "065-506-8518",
      email: "tarmsrch159@gmail.com",
      locationKey: "profile.location"
    },
    links: {
      github: "https://github.com/tarmsrch159",
      gitlab: "https://gitlab.com/tarmsrch159",
      facebook: "https://www.facebook.com/tanachai.hpsp/"
    }
  },
  language: "lang",
  experience: [
    {
      company: "DE MASTIC Solution",
      roleKey: "experience.demastic.role",
      periodKey: "experience.demastic.period",
      descriptionKeys: [
        "experience.demastic.desc1",
        "experience.demastic.desc2",
        "experience.demastic.desc3",
        "experience.demastic.desc4"
      ]
    }
  ],

  skills: {
    mobile: ["Flutter", "Dart", "Provider", "Firebase"],
    web: ["Vue JS", "React.js", "Laravel", "Node.js", "HTML5/CSS3", "JavaScript (ES6+)"],
    database: ["MySQL", "phpMyAdmin", "PostgreSQL"]
  },

  projects: [
    {
      titleKey: "projects.crypto.title",
      tech: "Flutter, Firebase",
      detailsKey: "projects.crypto.details"
    },
    {
      titleKey: "projects.skillStandard.title",
      tech: "React.js, Node.js, MySQL",
      detailsKey: "projects.skillStandard.details"
    },
    {
      titleKey: "projects.ecommerce.title",
      tech: "Vue, Laravel, MySQL",
      detailsKey: "projects.ecommerce.details",
      liveUrl: "https://shirtecom.great-site.net/",
      repoUrl: "https://github.com/tarmsrch159/Ecommerce-Project-Portfolio"
    }
  ]
}
