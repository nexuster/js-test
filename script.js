function loadSite() {
    var siteToLoad = document.getElementById('tests').value;
    alert('you will be sent to document "' + siteToLoad + '."');
    if (siteToLoad == 'messages.html') {
        alert('notice: this is not an online service');
    }
    window.location.href = "tests/" + siteToLoad;
}

// LONELY MESSAGES

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

// URL PARAMS

window.onload = function() {
    var upara = new URLSearchParams(window.location.search);
    var output = document.getElementById('output');
    if (output && upara.get('text')) {
        output.textContent = upara.get('text');
    }
}

function sendOutput() {
    var text = document.getElementById('upara-text').value;
    if (text && text.trim() !== '') {
        alert('"' + text + '" will now be sent');
        window.location.href = "output.html?text=" + encodeURIComponent(text);
    } else {
        alert('something prevented the code from running correctly');
    }
}