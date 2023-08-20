(function() {
  'use strict';

  const urlEdit = document.getElementById('urledit');
  const btn = document.getElementById('conv');

  btn.onclick = (event) => {
    let url = urlEdit.innerText;
    alert(url);
    url.replace(/^https:\/\/x.com/, "https://twitter.com");
    alert(url);
  }
});