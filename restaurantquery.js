var https = require("https");

//postcode = "Please enter your postcode: " + process.argv;
url = "https://uk.api.just-eat.io/restaurants/bypostcode/ec4m";

var request = https.get(url, function (response) {
  var buffer = "",
    data,
    route;

  response.on("data", function (chunk) {
    buffer += chunk;
  });

  response.on("end", function (err) {
    console.log("\n");
    data = JSON.parse(buffer);
    restaurants = data.Restaurants;

    // iterate through the restaurants and get the data
    for (let i = 0; i < restaurants.length; i++) {
      restaurantName = restaurants[i].Name;
      rating = restaurants[i].RatingStars;
      cuisineTypes = restaurants[i].Cuisines;

      console.log("Restaurant Name: " + restaurantName);
      console.log("Restaurant Rating: " + rating);
      console.log("Cuisine Types: ");
      //  console.log("Cuisine Types: " + cuisineTypes);
      for (let i = 0; i < cuisineTypes.length; i++) {
        cuisineTypesRes = cuisineTypes[i].Name;

        console.log(cuisineTypesRes);
      }
      console.log(" ");
    }
  });
});
