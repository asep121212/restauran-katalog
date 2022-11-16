import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantMenu } from '../templates/template-creator';
import '../templates/components/jumbotron';

const Home = {
  async render() {
    return `
   <div class="loading" id="loading">
      <div id="load"></div>
  </div> 
      <law-jumbotron></law-jumbotron>
      <section tabindex="0">
        <div id="row" class="row" >
        </div>
      </section>
      
    `;
  },

  async afterRender() {
    const restoran = await RestaurantSource.flowRestaurant();
    const conRestaurant = document.querySelector('#row');
    restoran.forEach((restaurant) => {
      conRestaurant.innerHTML += createRestaurantMenu(restaurant);
    });

    const loading = document.querySelector('#loading');
    loading.style.display = 'none';
  },
};

export default Home;
