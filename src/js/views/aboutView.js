class AboutView {
  #parentElement = document.querySelector(".about-container");
  #data;

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#parentElement.insertAdjacentHTML("beforeend", markup);
  }

  clear() {
    this.#parentElement.innerHTML = "";
  }

  #generateMarkup() {
    return `
      <div class="section-card">
        <div class="left-container">
          <ul id="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>HTML</li>
          </ul>
        </div>
        <div class="right-container">
          <p class="about-me-description">
          ${this.#data.description}
          </p>
          <ul>
            <li>maybe describe a passion project here?</li>
            <li>maybe describe a passion project here?</li>
            <li>maybe describe a passion project here?</li>
          </ul>
          <a href="#" class="download-btn" style="font-size: 18px; font-weight: 700;"
          >DOWNLOAD CV
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20L18 14M12 20L6 14M12 20L12 9.5M12 4V6.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div> 
        `;
  }
}

export default new AboutView();
