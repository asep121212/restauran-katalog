import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};


  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.lawRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ 'restaurant': { id: 1 } });

    expect(document.querySelector('[aria-label="unlike this noordfoodies"]'))
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ 'restaurant': { id: 1 } });

    expect(document.querySelector('[aria-label="like this noordfoodies"]')).toBeFalsy();
  });

 
    
  it('should not throw error if the unliked noordfoodies is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ 'restaurant': { id: 1 } });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this noordfoodies"]')
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

});

