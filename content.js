(function main() {
  function find_links() {
    return $(".icon_topic_latest").parent('a').toArray().map(function (anchor) {
      return {url: anchor.href, active: false};
    })
  }

  function open_all_in_tabs(e) {
    e.preventDefault();
    chrome.extension.sendRequest(find_links());
  }

  $(".action-bar").append('<a class="open_all_in_tabs" href="#">Open all topics in tabs</a>');
  $(".open_all_in_tabs").click(open_all_in_tabs);
})();

