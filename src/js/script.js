import { dataRomanian, dataEnglish } from "./db";
import heroView from "./views/heroView";
import aboutView from "./views/aboutView";
import projectView from "./views/projectView";

const page = document.querySelector("body");
const themeToggleBtn = document.querySelector(".dark-mode-toggle");
const languageToggleBtn = document.querySelector(".language-toggle");
const languageBtns = document.querySelectorAll(".toggle-btn");
const footerYear = document.querySelector("#dynamic-year");

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

themeToggleBtn.addEventListener("click", () => {
  page.classList.toggle("darkmode");
});

// languageToggleBtn /
//   addEventListener("click", () => {
//     if (englishLang.classList.contains("accent-color")) {
//       englishLang.classList.remove("accent-color");
//       romanianLang.classList.add("accent-color");
//     } else {
//       englishLang.classList.add("accent-color");
//       romanianLang.classList.remove("accent-color");
//     }
//   });

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
      // console.log("data" + attr);
      // console.log(dataEnglish.name);
      // console.log("data" + attr == dataEnglish.name);
      // currentData = {};
      // currentData = { ...dataEnglish };
      document.querySelector(".section-about-me").innerHTML = "About Me";
      document.querySelector(".section-recent-work").innerHTML = "recente";
      clearAll();
      showHero(dataEnglish);
      showAbout(dataEnglish);
      showProjects(dataEnglish);
    } else if ("data" + attr == dataRomanian.name) {
      // console.log("data" + attr);
      // console.log(dataRomanian.name);
      // console.log("data" + attr == dataRomanian.name);
      // currentData = {};
      // currentData = { ...dataRomanian };
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

setColorSchemePreference();

showHero(dataEnglish);
showAbout(dataEnglish);
showProjects(dataEnglish);

// const renderWorkCards = (items) => {
//   const section = document.querySelector("#work-container");

//   items.map((item) => {
//     section.insertAdjacentHTML(
//       "beforeend",
//       `
//       <div class="section-card" id="section-card">
//       <div class="left-container">
//         <img src="${item.imageURL}" alt="${item.title} image" />
//       </div>

//       <div class="right-container">
//         <h3 class="work-title">${item.title}</h3>
//         <p class="work-description">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
//           laborum eius porro nostrum quod necessitatibus. Repellendus nihil
//           eaque alias eos, doloribus cupiditate suscipit ea impedit libero,
//           repudiandae voluptatum eveniet deserunt animi veritatis facilis
//           dignissimos. Ab et esse porro maiores, laudantium magni
//           consequuntur placeat repudiandae, omnis, quaerat earum sequi eum
//           magnam.
//         </p>
//         <ul class="work-tools">
//           <li>CSS</li>
//           <li>HTML</li>
//           <li>JavaScript</li>
//         </ul>
//         <div class="work-links">
//           <a class="website-btn btn" href="#">WEBSITE</a>
//           <a class="github-btn" href="#"
//             >GO TO GITHUB
//             <svg
//               width="24"
//               height="25"
//               viewBox="0 0 24 25"
//               fill="currentColor"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M14.9453 1.75C13.5778 1.74998 12.4754 1.74996 11.6085 1.86652C10.7084 1.98754 9.95048 2.24643 9.34857 2.84835C8.82363 3.37328 8.55839 4.01836 8.41916 4.77635C8.28387 5.51291 8.25799 6.4143 8.25196 7.49583C8.24966 7.91003 8.58357 8.24768 8.99778 8.24999C9.41199 8.2523 9.74964 7.91838 9.75194 7.50418C9.75803 6.41068 9.78643 5.6356 9.89448 5.04735C9.99859 4.48054 10.1658 4.15246 10.4092 3.90901C10.686 3.63225 11.0746 3.4518 11.8083 3.35315C12.5637 3.25159 13.5648 3.25 15.0002 3.25H16.0002C17.4356 3.25 18.4367 3.25159 19.1921 3.35315C19.9259 3.4518 20.3144 3.63225 20.5912 3.90901C20.868 4.18577 21.0484 4.57435 21.1471 5.30812C21.2486 6.06347 21.2502 7.06459 21.2502 8.5V16.5C21.2502 17.9354 21.2486 18.9365 21.1471 19.6919C21.0484 20.4257 20.868 20.8142 20.5912 21.091C20.3144 21.3678 19.9259 21.5482 19.1921 21.6469C18.4367 21.7484 17.4356 21.75 16.0002 21.75H15.0002C13.5648 21.75 12.5637 21.7484 11.8083 21.6469C11.0746 21.5482 10.686 21.3678 10.4092 21.091C10.1658 20.8475 9.99859 20.5195 9.89448 19.9527C9.78643 19.3644 9.75803 18.5893 9.75194 17.4958C9.74964 17.0816 9.41199 16.7477 8.99778 16.75C8.58357 16.7523 8.24966 17.09 8.25196 17.5042C8.25799 18.5857 8.28387 19.4871 8.41916 20.2236C8.55839 20.9816 8.82363 21.6267 9.34857 22.1517C9.95048 22.7536 10.7084 23.0125 11.6085 23.1335C12.4754 23.25 13.5778 23.25 14.9453 23.25H16.0551C17.4227 23.25 18.525 23.25 19.392 23.1335C20.2921 23.0125 21.0499 22.7536 21.6519 22.1517C22.2538 21.5497 22.5127 20.7919 22.6337 19.8918C22.7503 19.0248 22.7502 17.9225 22.7502 16.5549V8.44513C22.7502 7.07754 22.7503 5.97522 22.6337 5.10825C22.5127 4.20814 22.2538 3.45027 21.6519 2.84835C21.0499 2.24643 20.2921 1.98754 19.392 1.86652C18.525 1.74996 17.4227 1.74998 16.0551 1.75H14.9453Z"
//                 fill="currentColor"
//               />
//               <path
//                 d="M2.00098 11.749C1.58676 11.749 1.25098 12.0848 1.25098 12.499C1.25098 12.9132 1.58676 13.249 2.00098 13.249L13.9735 13.249L12.0129 14.9296C11.6984 15.1991 11.662 15.6726 11.9315 15.9871C12.2011 16.3016 12.6746 16.338 12.9891 16.0685L16.4891 13.0685C16.6553 12.926 16.751 12.718 16.751 12.499C16.751 12.2801 16.6553 12.0721 16.4891 11.9296L12.9891 8.92958C12.6746 8.66002 12.2011 8.69644 11.9315 9.01093C11.662 9.32543 11.6984 9.7989 12.0129 10.0685L13.9735 11.749L2.00098 11.749Z"
//                 fill="currentColor"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//     `
//     );
//   });
// };

// let workData = [];

// renderWorkCards(workData);

// const englishLang = document.querySelector("#english-language");
// const romanianLang = document.querySelector("#romanian-language");
// const languageToggle = document.querySelector("#language-toggle");

// languageToggle.addEventListener("click", () => {
//   if (englishLang.classList.contains("accent-color")) {
//     englishLang.classList.remove("accent-color");
//     romanianLang.classList.add("accent-color");

//   } else {
//     englishLang.classList.add("accent-color");
//     romanianLang.classList.remove("accent-color");
//   }
// });
