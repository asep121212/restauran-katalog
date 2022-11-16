const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('Should return the restaurant that has been added', async () => {
    favoriteRestaurant.lawRestaurant({ id: 1 });
    favoriteRestaurant.lawRestaurant({ id: 2 });

    expect(await favoriteRestaurant.fileRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaurant.fileRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteRestaurant.fileRestaurant(3))
      .toEqual(undefined);
  })
   it('Should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.lawRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([]);
  }); 
  it('can return all of the Restaurant that have been added', async () => {
    favoriteRestaurant.lawRestaurant({ id: 1 });
    favoriteRestaurant.lawRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite Restaurant', async () => {
    favoriteRestaurant.lawRestaurant({ id: 1 });
    favoriteRestaurant.lawRestaurant({ id: 2 });
    favoriteRestaurant.lawRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a Restaurant even though the Restaurant has not been added', async () => {
    favoriteRestaurant.lawRestaurant({ id: 1 });
    favoriteRestaurant.lawRestaurant({ id: 2 });
    favoriteRestaurant.lawRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(4);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestaurantModel };
