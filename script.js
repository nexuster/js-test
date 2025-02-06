function loadSite() {
    var siteToLoad = document.getElementById('tests').value;
    alert('you will be sent to document "'+siteToLoad+'."')
    window.location.href = "tests/" + siteToLoad;
}