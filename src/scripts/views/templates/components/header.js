class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header>
          <div class="logo-container">
            <div class="logo">
              <a href="/">
                <img src="logo.png" alt="Logo" />
                NordFoodies
              </a>
            </div>
            <button class="toggle-button" tabindex="0">☰</button>
          </div>
          <nav class="menu">
            <ul>
              <li><a href="#/home">Home</a></li>
              <li><a href="#/favorite">Favorite</a></li>
              <li>
                <a
                  href="https://github.com/asep121212"
                  target="_blank"
                  >About Us</a
                >
              </li>
        
            </ul>
          </nav>
        </header>
      `;
  }
}
customElements.define('law-header', Header);
