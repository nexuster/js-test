function loadSite() {
    var siteToLoad = document.getElementById('tests').value;
    alert('you will be sent to document "'+siteToLoad+'."')
    if (siteToLoad == 'messages.html') {
        alert('notice: this is not an online service')
    }
    window.location.href = "tests/" + siteToLoad;
}