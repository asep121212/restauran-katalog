import API_ENDPOINT from '../../globals/api-endpoint';
import * as law from './biznes-creator';

const createRestaurantMenu = (restaurant) => `
  <div class="box">
    <img class="imgBx" src="${API_ENDPOINT.IMAGE.LARGE(restaurant.pictureId)}" alt="restaurant picture" />
    <div class="content">
      <h2 >${restaurant.name}</h2>
      <span class="rating" aria-label="rating ${restaurant.rating}"> ⭐ ${restaurant.rating} </span>
      <h1 class="law_hren"><a href="${`#/detail/${restaurant.id}`}">Show More</a></h1>

      </div>
  </div>
`;

const createDetailRestaurant = (restaurant) => `
  <h2 class = "judul-detail">Detail Restaurant</h2>
  <div class="container-detail">
    <img  src="${API_ENDPOINT.IMAGE.MEDIUM(restaurant.pictureId)}" alt="resataurant picture " class="image" >
    <div class="konten-restaurant">
      <h1 class="name" >${restaurant.name}</h1>
      <div class = "card">
      <h4 >Kategori : </h4>
      <p>${law.createRestaurantDetailCategories(restaurant).join(', ')}</p>
      <h4 >Rating : </h4>
      <p >${restaurant.rating}<i class="fa fa-star" aria-hidden="true"></i></p>
      <h4>Kota : </h4>
      <p class="city">${restaurant.city} </p>
      <h4 >Alamat : </h4>
      <p>${restaurant.address} </p> 
      
      </div>
      <div class="restaurant-menu card card2">
          <h4 >Makanan</h4>
          <ul> 
          ${law.createRestaurantDetailMenus(restaurant, 'foods')}
          </ul>
          <h4 class="minum" >Minuman</h4>
          <ul>
            ${law.createRestaurantDetailMenus(restaurant, 'drinks')}
          </ul>
      </div>
    </div>
    <div class="menu-deskripsi">
      <h4 >Deskripsi</h4>
      <p >${restaurant.description}</p>
    </div>
    <div class="restaurant-review">
      <h4 >Review</h4>
      <div class="review-person">
        ${law.createRestaurantDetailReviews(restaurant)}
      </div>
    </div>
  </div>

`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantMenu,
  createDetailRestaurant,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
