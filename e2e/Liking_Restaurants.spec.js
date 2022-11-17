const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#row');
  I.waitForElement('.restaurant-item__not__found', 30);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurants', async ({ I }) => {
  I.waitForElement('.restaurant-item__not__found', 30);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');


    I.waitForElement('.law_hren a', 20);
    I.seeElement('.law_hren a');

    const firstRestaurant = locate('.law_hren a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.waitForElement('#likeButton', 30);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');

    I.seeElement('.box');
    const likedRestaurantTitle = await I.grabTextFrom('.law_hren');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    

});
Scenario('unliking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item__not__found', 30);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.waitForElement('.law_hren a', 20);
  I.seeElement('.law_hren a');

  const firstRestaurant = locate('.law_hren a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);


  I.waitForElement('#likeButton', 1);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.box');

  const unlikedRestaurantsTitles =  await I.grabTextFrom('.law_hren ');
  assert.strictEqual(firstRestaurantTitle, unlikedRestaurantsTitles);

 
  I.seeElement('.law_hren a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');


    I.amOnPage('/#/favorite');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

});