(function() {
  'use strict';

  const urlEdit = document.getElementById('urledit');
  const btn = document.getElementById('conv');

  btn.onclick = (event) => {
    const url = urlEdit.value;
    urlEdit.value = url.replace(/^https:\/\/x.com/, "https://twitter.com");
    // alert(reurl);

    // copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(urlEdit.value);
    }
    else {
      oldClip(urlEdit.value);
    }

    alert(`${urlEdit.value}\nをクリップボードにコピーしました！`);
  }

  // 古いタイプのクリップボード操作
  function oldClip(str) {
    urlEdit.select();
    document.execCommand('copy');

    // 選択解除
    window.getSelection().removeAllRanges();    
  }
})();