define(function(require){
  var firebase = require('firebase');

  var ref = new Firebase("https://trippin-nss-app.firebaseio.com/");

  // listen for any changes on the "trips" key
  ref.child('trips').on('value', function(snapshot){
    var trips = snapshot.val();
    
    console.log("trips", trips);
  });

});