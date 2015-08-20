define(function(require){
  var $ = require("jquery");
  var visited = false;

  $("#openAddTripForm").click(function(){
    $("#addTripForm").slideToggle('slow');
  });

  $("#visited").click(function(){
    visited = true;
  });

  $("#wish-list").click(function(){
    visited = false;
  });

  $(".close").click(function(){
    $("#addTripForm").slideToggle('slow');
  });


  $("#addLocation").click(function(){  
    var newLocation = {
      location: $("#location").val(),
      location_type: $("#locationType").val() || "city",
      visited: visited,
      review: {
        currentTime: new Date(),
        date: $("#reviewDate").val(),
        text: $("#review").val(),
        title: $("#reviewTitle").val()
      }
    };

    console.log("newLocation", newLocation);
    $.ajax({
      url:"https://trippin-nss-app.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
    })
    .done(function(newData){
      $("#addTripForm").slideUp('slow');
      console.log("successfully posted: ", newData);
      $("#location").val("");
      $("#locationType").val("");
      $("#review").val("");
    })
    .fail(function(xhr, status, error){
      console.log("failed ajax", error);
    });

  });

});