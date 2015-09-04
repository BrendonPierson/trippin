define(function(require){
  var firebase = require('firebase'),
      templates = require('get-templates'),
      filter = require('filter'),
      search = require('search'),
      _ = require("lodash"),
      ref = new Firebase("https://trippin-nss-app.firebaseio.com/");

  // Listen for change on location types node
  ref.child("location_types").on("value", function(snapshot){
    var location_types = snapshot.val();
    $("#locationType").html(templates.locationTypesTpl(location_types));
  });

  // Listen for any changes on the "trips" key
  ref.child('trips').on('value', function(snapshot){
    var trips = snapshot.val();
    
    var tripsArray = [];

    //turn object into array of objects
    for (var trip in trips) {
      tripsArray[tripsArray.length] = trips[trip];
    }

    //sort array of objects 
    var sortedTripsArray = _.sortBy(tripsArray, "location");

    console.log("tripsArray", sortedTripsArray);

    // This will hold the complete DOM string of trips
    var populatedTemplate = templates.tripTpl(sortedTripsArray);

    // Insert the DOM string into the appropriate element
    $("#list-of-trips").html(populatedTemplate);


    //init the filter listeners
    filter(trips);

    search(tripsArray);


  });

});