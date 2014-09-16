(function main() {
    function find_links() {
        return _.map($("img[src*='latest']").parent("a[href*='viewtopic']"), function (anchor) {
            return {url: anchor.href, active: false}
        })
    }
    
    function open_all_in_tabs(e) {
        e.preventDefault()
        chrome.extension.sendRequest(find_links())
    }

    $("a[href*='egosearch']").after(' | <a id="open_all_in_tabs" href="#">Open all topics in tabs</a>')
    $("#open_all_in_tabs").click(open_all_in_tabs)
})()

