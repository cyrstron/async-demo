Promise.all([
    sendRequest('GET', '/stable?maxRandom=10'),
    sendRequest('GET', '/stable?maxRandom=20'),
    sendRequest('GET', '/stable?maxRandom=30'),
  ])
  .then(([response1, response2, response3 ]) => {
    handleResponse(response1);
    handleResponse(response2);
    handleResponse(response3);
  })
  .catch((error) => handleError(error));

var responses = [];

sendRequest('GET', '/stable?maxRandom=10')
  .then(function (response) {  
    responses.push(response);
    return sendRequest('GET', '/stable?maxRandom=20')
  })
  .then(function (response) {  
    responses.push(response);
    return sendRequest('GET', '/stable?maxRandom=30')
  })
  .then(function (response) {
    responses.push(response);
    
    var response1 = responses[0];
    var response2 = responses[1];
    var response3 = responses[2];

    handleResponse(response1);
    handleResponse(response2);
    handleResponse(response3);
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