chrome.extension.onRequest.addListener(function (create_properties) {
  create_properties.forEach(function (properties) {
    chrome.tabs.create(properties)
  })
});
