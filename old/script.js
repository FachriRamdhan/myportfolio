// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

const education = document.getElementById("education");
const educationBtn = document.getElementById("edu-btn");
const certificate = document.getElementById("certificate");
const certificateBtn = document.getElementById("certif-btn");

const loca = document.getElementById("loca");
const locaBtn = document.getElementById("loca-btn");
const grads = document.getElementById("grads");
const gradsBtn = document.getElementById("grads-btn");

portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  portfolio.style.display = "flex";
  education.style.display = "none";
  certificate.style.display = "none";
  skillsBtn.classList.remove("active-btn");
  portfolioBtn.classList.add("active-btn");
  educationBtn.classList.remove("active-btn");
  certificateBtn.classList.remove("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  portfolio.style.display = "none";
  education.style.display = "none";
  certificate.style.display = "none";
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
  educationBtn.classList.remove("active-btn");
  certificateBtn.classList.remove("active-btn");
});

educationBtn.addEventListener("click", (event) => {
  education.style.display = "flex";
  portfolio.style.display = "none";
  skills.style.display = "none";
  certificate.style.display = "none";
  educationBtn.classList.add("active-btn");
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.remove("active-btn");
  certificateBtn.classList.remove("active-btn");
});

certificateBtn.addEventListener("click", (event) => {
  certificate.style.display = "grid";
  portfolio.style.display = "none";
  skills.style.display = "none";
  education.style.display = "none";
  certificateBtn.classList.add("active-btn");
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.remove("active-btn");
  educationBtn.classList.remove("active-btn");
});

// Light & Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const emailLogo = document.querySelector('img[alt="email logo"]');
  const phoneLogo = document.querySelector('img[alt="phone logo"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  const instagramLogo = document.querySelector('img[alt="instagram logo"]');
  const gradsLogo = document.querySelector('img[alt="grads icon"]');
  const locaLogo = document.querySelector('img[alt="loca icon"]');

  const lightLogos = {
    email: "assets/email_light.png",
    phone: "assets/phone_light.png",
    linkedin: "assets/linkedin_light.png",
    instagram: "assets/instagram_light.png",
    theme: "assets/light.png",
    loca: "assets/loca.png",
    grads: "assets/grads.png",
  };

  const darkLogos = {
    email: "assets/email_dark.png",
    phone: "assets/phone_dark.png",
    linkedin: "assets/linkedin_dark.png",
    instagram: "assets/instagram_dark.png",
    theme: "assets/dark.png",
    loca: "assets/loca_dark.png",
    grads: "assets/grads_dark.png",
  };

  function setTheme(isDark) {
    emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
    phoneLogo.src = isDark ? darkLogos.phone : lightLogos.phone;
    linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
    instagramLogo.src = isDark ? darkLogos.instagram : lightLogos.instagram;
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
    gradsIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
    locaIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
  }

  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);

    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);

    setTheme(isDark);
  };

  // Load saved theme from local storage or default to light theme
  loadTheme();
});
