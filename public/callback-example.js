var xhr = new XMLHttpRequest();

xhr.open('GET', '/unstable?maxRandom=10');
xhr.send();

xhr.onreadystatechange = function callback() {  
  if (xhr.readyState != 4) return;

  if (xhr.status != 200) {
    handleError(xhr.response);
  } else {
    handleResponse(xhr.response);
  }
}

function handleError(error) {
  console.error(error)
}

function handleResponse(error) {
  console.info(error)
}