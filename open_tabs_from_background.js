chrome.extension.onRequest.addListener(function(create_properties) {
    _.forEach(create_properties, function(properties) {
        chrome.tabs.create(properties)
    })
})

function() {
    return diudi
}