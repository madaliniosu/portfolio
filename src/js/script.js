import { dataRomanian, dataEnglish } from "./db";
import heroView from "./views/heroView";
import aboutView from "./views/aboutView";
import projectView from "./views/projectView";

const page = document.querySelector("body");
const themeToggleBtn = document.querySelector(".dark-mode-toggle");
const languageToggleBtn = document.querySelector(".language-toggle");
const languageBtns = document.querySelectorAll(".toggle-btn");
const footerYear = document.querySelector("#dynamic-year");

// dark mode

const setColorSchemePreference = () => {
  if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
    if (!page.classList.contains("darkmode")) {
      page.classList.add("darkmode");
      localStorage.setItem("darkMode", "enabled");
    }
  } else {
    page.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
  }
};

//dark mode toggle

themeToggleBtn.addEventListener("click", () => {
  page.classList.toggle("darkmode");
});

//language toggle

const clearAll = () => {
  heroView.clear();
  projectView.clear();
  aboutView.clear();
};

languageBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    languageToggleBtn.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    const attr = btn.getAttribute("language");

    if ("data" + attr == dataEnglish.name) {
      document.querySelector(".section-about-me").innerHTML = "About Me";
      document.querySelector(".section-recent-work").innerHTML = "Recent Work";
      clearAll();
      showHero(dataEnglish);
      showAbout(dataEnglish);
      showProjects(dataEnglish);
    } else if ("data" + attr == dataRomanian.name) {
      document.querySelector(".section-about-me").innerHTML = "Despre mine";
      document.querySelector(".section-recent-work").innerHTML =
        "Proiecte recente";
      clearAll();
      showHero(dataRomanian);
      showAbout(dataRomanian);
      showProjects(dataRomanian);
    }
  });
});

footerYear.innerHTML = new Date().getFullYear();

const showHero = (data) => {
  heroView.render(data.hero);
};

const showAbout = (data) => {
  aboutView.render(data.aboutMe);
};
const showProjects = (data) => {
  data.projects.forEach((project) => {
    projectView.render(project);
  });
};

setColorSchemePreference();

showHero(dataEnglish);
showAbout(dataEnglish);
showProjects(dataEnglish);
