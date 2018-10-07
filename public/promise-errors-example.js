sendRequest('GET', '/unstable')
  .then(function (response) {
    handleResponse(response);
  })
  .catch(function (error) {
    handleError(error);
  });

sendRequest('GET', '/unstable')
  .then(function (response) {
    handleResponse(response);
  }, function (error) {
    handleError(error);
  });


sendRequest('GET', '/unstable?status=404')
  .then(function (response) {
    handleResponse(response);
    return sendRequest('GET', '/fail?status=500');
  }, function (error) {
    handleError(error);
  });

sendRequest('GET', '/unstable?status=404')
  .then(function (response) {
    handleResponse(response);
    return sendRequest('GET', '/fail?status=500');
  }, function (error) {
    handleError(error);
  })
  .catch(function(error) {
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