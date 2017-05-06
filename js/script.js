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
    console.log($("#searchQuery").val());
  }
}

$(document).ready(wikiViewer.onReady);
