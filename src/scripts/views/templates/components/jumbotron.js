class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  } 

  
  render() {
    this.innerHTML = `
   
      <section class="backgrounds" >
      <picture class="hero-img">
      <source media="(max-width: 480px)" srcset="icons/hero-image.jpg" type="image/jpeg">
      <img src="icons/hero-image.jpg" class="lazyload" alt="" />
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
