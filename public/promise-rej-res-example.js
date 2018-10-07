sendRequest('GET', '/stable?maxRandom=10')
  .then(function (response) {
    console.log(response.then); // undefined!
    return response;
  })
  .then(function (response) {    
    handleResponse(response);
  })
  .catch(function (error) {
    handleError(error);
  });

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