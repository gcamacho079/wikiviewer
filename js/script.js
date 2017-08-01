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
    var link = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + $("#searchQuery").val() + "&format=json&origin=*";
    wikiViewer.callAPI(link);
  },

  callAPI: function(wikiLink) {
    $.ajax(wikiLink, {
      dataType: "json",
      type: "GET",
      success: function(data) {
        //console.log(data);
        $.each(data[1], function(index, value) {
          console.log(value + data[2][index] + data[3][index]); // Logs Wiki info using index from first array

        });
      }

    }); // End wiki json call*/
  },

  entryInfo: function(name, url, article) {
    //console.log(name + url + article);
  }
}

$(document).ready(wikiViewer.onReady);
