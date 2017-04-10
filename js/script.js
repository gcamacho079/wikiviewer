$(document).ready(function() {

  $("#search").on("submit", function(event) {
    event.preventDefault();
    var searchFor = $("#search").serialize();
    searchFor = searchFor.substring(12, searchFor.length);
    console.log(searchFor);
  })


})
