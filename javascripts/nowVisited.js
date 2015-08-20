define(function(require){
  var firebase = require("firebase"),
      selectedTripId;

   $(document).on('click', "button[id^='nowVisited#']", function(){
    //grab unique identifier 
    selectedTripId = $(this).attr("id").split("#")[1];
    var ref = new Firebase("https://trippin-nss-app.firebaseio.com/trips/" + selectedTripId);
   

     ref.update({
      visited: true 
    });

  });
});