window.onload = function () {
  var hndl = document.getElementsByTagName('iframe');
  for (var i = 0; i < hndl.length; i++) {
    if (hndl[i].getAttribute('data-src')) {
      hndl[i].setAttribute('src', hndl[i].getAttribute('data-src'));
    }
  }
}