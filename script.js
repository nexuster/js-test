function loadSite() {
    var siteToLoad = document.getElementById('tests').value;
    alert('you will be sent to document "'+siteToLoad+'."')
    if (siteToLoad == 'messages.html') {
        alert('notice: this is not an online service')
    }
    window.location.href = "tests/" + siteToLoad;
}

//LONELY MESSAGES

function send() {
    var para = document.createElement('p');
    var div = document.getElementById('messagesOutput');
    var node = document.createTextNode(document.getElementById('sendto').value);
    if (node.textContent) {
        para.appendChild(node);
        para.style.color = 'aliceblue';
        div.appendChild(para);
        div.style.display = 'block';
    }
}

//URL PARAMS

window.onload = function() {
    var upara = new URLSearchParams(window.location.search);
    if (window.location.search == 'https://nexuster.github.io/js-test/tests/upara/output.html?text='+upara.get('text')) {
        var output = document.getElementById('output');

        output.textContent = upara.get('text');
    }
        
}

function sendOutput() {
    var text = document.getElementById('upara-text').value;
    if (text) {
        alert('"'+text+' will now be sent');
        window.location.href = "output.html?text=" + encodeURIComponent(text);
    } else {
        if (error || text.trim() == '') {
            alert('something prevented the code from running correctly');
        }
    }
}