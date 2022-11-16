import { createRestaurantMenu } from '../../templates/template-creator';

class FavoriteRestaurantView {
  getTemplate() {
    return `
    <law-jumbotron></law-jumbotron>
    <div id="row" class="row">
    </div>
  
    `;
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurant(restaurants);
  }

  showFavoriteRestaurants(restaurant = []) {
    let html;
    if (restaurant.length) {
      html = restaurant.reduce((carry, restaurant) => carry.concat(createRestaurantMenu(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('row').innerHTML = html;
    document.getElementById('row').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantView;
