window.onload = function() {
    fetch('scriptList.js')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const length = lines.length;
            const specificLine = lines[Math.floor(Math.random() * length)];
            if (specificLine) {
                eval(specificLine);
            }
        })
        .catch(error => alert('Error loading scriptList.txt: ' + error));
}