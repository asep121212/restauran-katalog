import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createDetailRestaurant } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="loading" id="loading">
    <div id="load"></div>
    </div> 
      <section id="mainContent" tabindex="0">
      <div id="resto" class="resto" tabindex="0"></div>
      <div id="likeButtonContainer"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.inResto(url.id);
    const restaurantContainer = document.querySelector('#resto');
    restaurantContainer.innerHTML = createDetailRestaurant(restaurant);
    const loading = document.querySelector('#loading');
    loading.style.display = 'none';
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
