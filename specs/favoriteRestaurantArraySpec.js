import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  fileRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  lawRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.fileRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },

};

describe('Favorite Restaurant Array Contract test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
