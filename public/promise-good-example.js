sendRequest('GET', '/unstable?maxRandom=10')
  .then(function (response) {  
    return sendRequest('GET', '/stable?maxRandom=' + response);
  })
  .then(function (response) {    
    handleResponse(response);
    return sendRequest('GET', '/fail')
  })
  .then(function (response) {
    handleResponse(response);
  })
  .catch(function (error) {
    handleError(error);
  });

sendRequest('GET', '/unstable?maxRandom=10')
  .then(response => sendRequest('GET', `/stable?maxRandom=${response}`))
  .then((response) => {    
    handleResponse(response);
    return sendRequest('GET', '/fail');
  })
  .then(response => handleResponse(response))
  .catch(error => handleError(error));

function sendRequest(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
  
    xhr.open(method, url);
    xhr.send();
    
    xhr.onreadystatechange = function () {  
      if (xhr.readyState != 4) return;
    
      if (xhr.status != 200) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    }  
  });
}

function handleError(error) {
  console.error(error)
}

function handleResponse(error) {
  console.info(error)
}