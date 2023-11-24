class HeroView {
  #parentElement = document.querySelector(".hero");
  #data;

  render(data) {
    console.log(data);
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#parentElement.insertAdjacentHTML("beforeend", markup);
  }

  clear() {
    this.#parentElement.innerHTML = "";
  }

  #generateMarkup() {
    return `
    <div class="hero-container-left">
          <h3 class="hero-greeting">${this.#data.greeting}</h3>
          <h1 class="hero-introduction">${this.#data.introduction}</h1>
          <h3 class="hero-description">
            ${this.#data.description}
          </h3>
          <a href="mailto:iosu.gm@gmail.com" class="hero-cta-btn">${
            this.#data.callToAction
          }</a> 

        </div>
        <div class="hero-container-right">
          <div class="profile-pic-container">
          </div>
        </div>
        `;
  }
}

export default new HeroView();
