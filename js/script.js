var wikiViewer = {
  onReady: function() {
    $("#searchQuery").keydown(wikiViewer.checkKey); // Snags query when enter is pressed
    $("#submitButton").click(wikiViewer.getQuery); // Snags query when input button is pushed
  },

  checkKey: function() {
    if (event.which == 13) {
      console.log($("#searchQuery").val());
    }
  },

  getQuery: function() {
    console.log($("#searchQuery").val());
  }
}

$(document).ready(wikiViewer.onReady);
