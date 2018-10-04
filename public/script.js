const xhr = new XMLHttpRequest();

xhr.open('GET', '/fail');

xhr.send();

xhr.onreadystatechange = function () {
  
  if (xhr.readyState != 4) return;

  if (xhr.status != 200) {
    alert(`${xhr.status}: ${xhr.response}`);
  } else {
    alert('OK!');
  }
}