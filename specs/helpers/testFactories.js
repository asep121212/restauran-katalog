import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
