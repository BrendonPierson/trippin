define(function(require){
  var firebase = require('firebase'),
      templates = require('get-templates'),
      filter = require('filter'),
      ref = new Firebase("https://trippin-nss-app.firebaseio.com/");

  // Listen for change on location types node
  ref.child("location_types").on("value", function(snapshot){
    var location_types = snapshot.val();
    console.log("location_types", location_types);
    $("#locationType").html(templates.locationTypesTpl(location_types));
  });

  // Listen for any changes on the "trips" key
  ref.child('trips').on('value', function(snapshot){
    var trips = snapshot.val();
    
    console.log("trips", trips);

    // This will hold the complete DOM string of trips
    var populatedTemplate = templates.tripTpl(trips);

    // Insert the DOM string into the appropriate element
    $("#list-of-trips").html(populatedTemplate);


    //init the filter listeners
    filter(trips);


  });

});