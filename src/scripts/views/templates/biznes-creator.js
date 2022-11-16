const createRestaurantDetailCategories = (restaurant) => {
  const dataArray = [];
  restaurant.categories.forEach((data) => {
    dataArray.push(data.name);
  });
  return dataArray;
};

const createRestaurantDetailMenus = (restaurant, menu) => {
  const data = restaurant.menus;
  let result = '';
  switch (menu) {
    case 'foods': {
      const dataFoods = data.foods;
      dataFoods.forEach((food) => {
        result += `<li  class= "men"><i class="fa fa-angle-double-right"></i>${food.name}</li>`;
      });
      break;
    }
    case 'drinks': {
      const dataDrinks = data.drinks;
      dataDrinks.forEach((drink) => {
        result += `<li  class= "men"><i class="fa fa-angle-double-right"></i>${drink.name}</li>`;
      });
      break;
    }
    default:
      return result;
  }
  return result;
};

const createRestaurantDetailReviews = (restaurant) => {
  const data = restaurant.customerReviews;
  let result = '';
  data.forEach((personReview) => {
    result += `
      <div class="review-template">
      <h1> ${personReview.name}</h1>
      <h2> ${personReview.date}</h2>
      <h3> ${personReview.review}</h3>
       
      </div>
    `;
  });
  return result;
};

export {
  createRestaurantDetailCategories,
  createRestaurantDetailMenus,
  createRestaurantDetailReviews,

};
