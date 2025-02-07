# javascript testing site

hai
i use this site to test random things my slow brain can think of when coding
its my way of learning the language thats surprisingly more difficult that pico 8's lua 😭

if you are seeing the source code and you want to go to the website [click here](https://nexuster.github.io/js-test)

im also gonna try to use this website for html and css testing aswell


## current things im working on
#### these will be crossed off when im done (~strikethrough~)
- ~~dropdowns that send to specific websites using "value=" (probably gonna be used for choose which test)~~
- ~~url parameters because who doesnt like using those~~
- ~~lonely message sending~~
- page that shows something random everytime its opened


## try this piece of code

```html
<!DOCTYPE html>
<html>
    <head>
        <title>JSTS - LONELY MESSAGES</title>
        <link rel="stylesheet" href="https://nexuster.github.io/js-test/style.css"/>
    </head>
    <body>
        <div>
            <div id="messagesOutput" class="pretty" style="display:none;">
                <!-- paragraphs with dynamically appear here -->
            </div>
            <label for="utext">send a message</label>
            <input type="text" id="sendto" name="utext"/>
            <button onclick="send()">create div</button>
        </div>
        <script>
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
        </script>
    </body>
</html>
```
