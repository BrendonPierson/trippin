define(function(require){
  var $ = require("jquery");
  var visited = false;

  $("#visited").click(function(){
    visited = true;
  });

  $("#wish-list").click(function(){
    visited = false;
  });

  var newLocation = {
    location: $("#location").val(),
    location_type: $("#locationType").val() || "city",
    visited: visited,
    review: $("#review").val()
  };

  $("#addLocation").click(function(){  
    $.ajax({
      url:"https://trippin-nss-app.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
    })
    .done(function(newData){
      console.log("successfully posted: ", newData);
    })
    .fail(function(xhr, status, error){
      console.log("failed ajax", error);
    });

  });

});