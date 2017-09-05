var wikiViewer = {
  onReady: function() {
    $("#searchQuery").keydown(wikiViewer.checkKey); // Snags query when enter is pressed
    $("#submitButton").click(wikiViewer.fetchAndMake); // Snags query when input button is pushed
  },

  checkKey: function(event) {
    if (event.which == 13) {
      event.preventDefault(); // Prevents page reload
      wikiViewer.fetchAndMake();
    }
  },

  fetchAndMake: function() {
    $("#results").empty();
    var link = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + $("#searchQuery").val() + "&format=json&origin=*";
    wikiViewer.callAPI(link);
  },

  callAPI: function(wikiLink) {
    $.ajax(wikiLink, {
      dataType: "json",
      type: "GET",
      success: function(data) {
        console.log(data);
        if (data[1].length == 0) { // If the API finds no results, send back error message card
          wikiViewer.printErrorMessage();
        }
        else {
          $.each(data[1], function(index, value) { // To-do: write code to pull some of article if data[2] is ""
            wikiViewer.entryInfo(value, data[3][index], data[2][index]);
          });
        }
      }
    }); // End wiki json call
  },

  entryInfo: function(name, url, article) {
    $("<li><div class='entry-card'><a class='thick' target='_blank' href='" + url + "'>" + name + "</a><p>" + article + "</p></li></div>").appendTo("#results").hide().fadeIn(1000);
  },

  printErrorMessage: function() {
    $("<div class='entry-card'><p>Sorry, I couldn't find any results for that query. Please try again.</p></div>").appendTo("#results").hide().fadeIn(1000);
  }
}

$(document).ready(wikiViewer.onReady);
