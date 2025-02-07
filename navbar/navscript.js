window.onload = function() {
    fetch('navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var navSpan = doc.getElementById('navbar');
            if (navSpan) {
                var navDiv = document.createElement('div');
                navDiv.appendChild(navSpan.cloneNode(true));
                document.body.insertBefore(navDiv, document.body.firstChild);
                //alert('successfully loaded navbar');
            }
        })
        .catch(error => alert('error loading navbar:' + error));
}