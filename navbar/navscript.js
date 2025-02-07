window.onload = function() {
    if (!window.location.href == 'navbar/navbar.html') {
        alert('test for href check')
        var navSpan = document.getElementById('navbar');
        var navDiv = document.createElement('div');

        navDiv.appendChild(navSpan);
    }
}