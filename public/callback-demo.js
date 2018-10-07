var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(e) {
  if (xhr.readyState !== 4) return;

  if (xhr.status === 200) {
    doSthWithData(xhr.response);
  }    
};

xhr.open('GET', '/stable?maxRandom=1');
xhr.send();