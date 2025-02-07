window.onload = function() {
    alert('test for active js');
    
    // Ensure the script only runs if the element exists
    var navSpan = document.getElementById('navbar');
    if (navSpan) {
        var navDiv = document.createElement('div');
        navDiv.appendChild(navSpan.cloneNode(true)); // Clone to avoid removing original
        document.body.insertBefore(navDiv, document.body.firstChild); // Insert at the top
    }
}