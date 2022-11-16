class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
 
    <div class="frame">
    <p>Copyright © 2022 - NordFoodies</p>

    <a href="https://www.instagram.com/aryadi.ay48" id="github">
    <source media="(max-width: 480px)" srcset="icons/github-small.png" type="image/jpeg">
    <img src="icons/github.png" class="lazyload" alt="" />
    </a>
    <a href="https://www.instagram.com/aryadi.ay48" id="instagram">
    <source media="(max-width: 480px)" srcset="icons/instagram-small.png" type="image/jpeg">
    <img  src="icons/instagram.png" class="lazyload" alt="" />
    </a>
    <a href="https://twitter.com/Cinlu12" id="twitter">
    <source media="(max-width: 480px)" srcset="icons/twitter-small.png" type="image/jpeg">
    <img src="icons/twitter.png" class="lazyload" alt="" />
    </a>
  </div>
      </footer>
    `;
  }
}
customElements.define('law-footer', Footer);
