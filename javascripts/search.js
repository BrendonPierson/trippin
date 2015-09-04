define(function(require){
  var $ = require("jquery");

  return function(arrayOfTrips) {
    
    $("#searchSubmit").click(function(e){
      e.preventDefault();
      var keywordsArray = [];
      for(var i = 0; i < arrayOfTrips.length; i++) {
        var text = _.valuesIn(arrayOfTrips[i]);
        keywordsArray[i] = text.join().toLowerCase();
      }
      console.log(keywordsArray);

    });
  };
});