class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  
  render() {
    this.innerHTML = `
   
      <section class="backgrounds" >
      <picture>
      <source media="(max-width: 480px)" srcset="icons/hero.webp" type="image/webp">
     <source media="(max-width: 480px)" srcset="icons/hero-small.jpg" type="image/jpeg">
      <source srcset="icons/hero-image-large.webp" type="image/webp">
      <img src="icons/hero-image-large.jpg" class="lazyload" alt="" />
   </picture>
      <div class= "background">
      <h1> Selamat Datang </h1>
      <h1> NordFoodies </h1>
    </div>
      </section>
    `;
  }
}
customElements.define('law-jumbotron', Jumbotron);
