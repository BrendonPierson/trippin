define(function(require){
  var $ = require("jquery"),
      selectedTripId;

  //select buttons that begin with id="reviewTitle#"
  $(document).on('click', "button[id^='add-review#']", function(){
    //grab unique identifier 
    selectedTripId = $(this).attr("id").split("#")[1];
    $(".review-entry").toggle();
  });

  $("#save-review").click(function(){
    var tripReviewRef = new Firebase('https://trippin-nss-app.firebaseio.com/trips/' + selectedTripId);
    
    //push new review to reviews location
    tripReviewRef.child('reviews').push({
      date: $("#reviewDateUpdate").val(),
      text: $("#reviewUpdate").val(),
      title: $("#reviewTitleUpdate").val(),
    });
  });


});