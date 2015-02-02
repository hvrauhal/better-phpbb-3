(function main() {
  function find_links() {
    return $(".icon_topic_latest").parent('a').toArray().map(function (anchor) {
      return {url: anchor.href, active: false};
    })
  }

  function open_all_in_tabs(links) {
    chrome.extension.sendRequest(links);
  }

  var links = find_links();
  if (links.length > 0) {
    $(".action-bar").append('<a class="open_all_in_tabs" href="#">Open all topics in tabs</a>');
    $(".open_all_in_tabs").click(function (e) {
      e.preventDefault();
      open_all_in_tabs(links);
    });
  }
  $("#page-footer").prepend($('#page-header .navbar').clone().find('#nav-breadcrumbs').remove().end())
})();

