window.onload = function() {
    if (!window.location.href == 'https://nexuster.github.io/js-test/navbar/navscript.js') {
        alert('test for href check')
        var navSpan = document.getElementById('navbar');
        var navDiv = document.createElement('div');

        navDiv.appendChild(navSpan);
    }
}