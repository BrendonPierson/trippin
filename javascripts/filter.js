define(function(require){
  var $ = require("jquery"),
      template = require("get-templates");
      // firebase = require("firebase"),
      // ref = new Firebase('https://trippin-nss-app.firebaseio.com/trips')


return function(trips){
  $("#visitedFilter").click(function(){
    console.log("visited filter");
    $("#list-of-trips").html(template.visitedTpl(trips));
  });

  $("#wish-list-filter").click(function(){
    console.log("wishlist filter");
    $("#list-of-trips").html(template.wishListTpl(trips));
  });
  $("#reset-filter").click(function(){
    $("#list-of-trips").html(template.tripTpl(trips));
  });
};

});