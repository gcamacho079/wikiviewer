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
        $.each(data[1], function(index, value) {
          wikiViewer.entryInfo(value, data[3][index], data[2][index]);
        });
      }
    }); // End wiki json call*/
  },

  entryInfo: function(name, url, article) {
    var title = name;
    var pageLink = url;
    var text = article;
    $("<li><a target='_blank' href='" + pageLink + "'>" + title + "</a></li><p>" + text + "</p>").appendTo("#results");
  }
}

$(document).ready(wikiViewer.onReady);
