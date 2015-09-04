define(function(require){
  var $ = require("jquery"),
      template = require("get-templates");

return function(trips){
  //click event handlers for filter buttons
  //filters by switching the hbs template
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