const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});


// MAKE LIST
function makeList() {
    var headings = document.getElementsByTagName('h2');
    var div = document.createElement('div');
    div.setAttribute(' id ', 'testList');
    var title = div.appendChild(document.createElement('div'));
    title.appendChild(document.createTextNode('Tests on this page:'));
    for (i = 0; i < headings.length; i++) {
        var test = div.appendChild(document.createElement('p'));
        test.appendChild(document.createTextNode(headings[i].childNodes[0].data));
    }
    body = document.getElementsByTagName('body')[0];
    body.insertBefore(div, body.firstChild);
}



// COLOR PALETTE //
function setPreferredColorScheme() {
    var themeToggleBtn = document.querySelector('#theme-toggle-btn');
    themeToggleBtn.addEventListener('change', switchTheme, false);
    var isPreferredColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isPreferredColorSchemeDark) {
      themeToggleBtn.checked = true;
      $('.CodeMirror').addClass('cm-s-darcula');
      $('body').addClass('dark-mode');
      $('.logo').children('img').attr("src", "web/banner-dark.svg");
    }
  }
  
  function switchTheme(themeToggleEvent) {
    if (themeToggleEvent.target.checked) {
      $('.CodeMirror').addClass('cm-s-darcula');
      $('body').addClass('dark-mode');
      $('.logo').children('img').attr("src", "web/banner-dark.svg");
    } else {
      $('.CodeMirror').removeClass('cm-s-darcula');
      $('body').removeClass('dark-mode');
      $('.logo').children('img').attr("src", "web/banner-light.svg");
    }
  }