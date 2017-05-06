var wikiViewer = {
  onReady: function() {
    $("#searchQuery").keydown(wikiViewer.checkKey); // Snags query when enter is pressed
    $("#submitButton").click(wikiViewer.getQuery); // Snags query when input button is pushed
  },

  checkKey: function(event) {
    if (event.which == 13) {
      event.preventDefault(); // Prevents page reload
      wikiViewer.getQuery();
    }
  },

  getQuery: function() {
    wikiViewer.buildUrl($("#searchQuery").val())
  },

  buildUrl: function(value) {
    var link = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + value + "&format=json";
    console.log(link);
  }
}

$(document).ready(wikiViewer.onReady);
