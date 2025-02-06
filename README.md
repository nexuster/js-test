# javascript testing site

hai
i use this site to test random things my slow brain can think of when coding
its my way of learning the language thats surprisingly more difficult that pico 8's lua 😭

if you are seeing the source code and you want to go to the website [click here](https://nexuster.github.io/js-test)

im also gonna try to use this website for html and css testing aswell

::: {.pretty}

## current things im working on
#### these will be crossed off when im done (~strikethrough~)
- ~~dropdowns that send to specific websites using "value=" (probably gonna be used for choose which test)~~
- ~~url parameters because who doesnt like using those~~
- ~~lonely message sending~~
- page that shows something random everytime its opened
:::

## try this piece of code

```html
<!DOCTYPE html>
<html>
    <head>
        <title>JSTS - URL PARAMETERS</title>
        <link rel="stylesheet" href="https://nexuster.github.io/js-test/style.css"/>
    </head>
    <body>
        <div>
            <label for="utext">send a message</label>
            <input type="text" id="sendto" name="utext"/>
            <button onclick="send()">create div</button>
        </div>
        <script>
            function send() {
                var div = document.createElement('DIV')
                var text = document.getElementById('sendto')
                if (text) {
                    div.textContent = text.value
                }
            }
        </script>
    </body>
</html>
```
