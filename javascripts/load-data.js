define(function(require){
  var firebase = require('firebase'),
      getTemplates = require('get-templates'),
      ref = new Firebase("https://trippin-nss-app.firebaseio.com/");

      console.log(getTemplates);

  // Listen for any changes on the "trips" key
  ref.child('trips').on('value', function(snapshot){
    var trips = snapshot.val();
    
    console.log("trips", trips);

    // This will hold the complete DOM string of trips
    var populatedTemplate = getTemplates.tripTpl(trips);

    // Insert the DOM string into the appropriate element
    $("#list-of-trips").html(populatedTemplate);


  });

});