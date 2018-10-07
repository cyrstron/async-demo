sendFirstRequest(function (response) {
  sendSecondRequest(response, function (response) {
    sendThirdRequest(response, function (response) {
      handleResponse(response);
    });
  });
});

function sendFirstRequest(callback) {
  sendRequest('GET', '/unstable?maxRandom=10', function (error, response) {
    if (error) {
      handleError(error);
    } else {
      callback(response);
    }
  });
};

function sendSecondRequest(response, callback) {
  handleResponse(response);
  sendRequest('GET', '/fail', function (error, response) {
    if (error) {
      handleError(error);
    } else {
      callback(response)
    }
  });
};

function sendThirdRequest(callback) {
  sendRequest('GET', '/unstable?maxRandom=10', function (error, response) {
    if (error) {
      handleError(error);
    } else {
      callback(response)
    }
  });
};


sendRequest('GET', '/unstable?maxRandom=10', function (error, response) {
    if (error) {
      handleError(error);
    } else {
      sendRequest(
        'GET', '/stable?maxRandom=' + response, function (error, response) {
          if (error) {
            handleError(error);
          } else {
            handleResponse(response);
            sendRequest('GET', '/fail', function (error, response) {
                if (error) {
                  handleError(error);
                } else {
                  handleResponse(response);
                }
              }
            );
          }
        }
      );
    }
  }
);

function sendRequest(method, url, callback) {
  var xhr = new XMLHttpRequest();
  
  xhr.open(method, url);
  xhr.send();
  
  xhr.onreadystatechange = function () {  
    if (xhr.readyState != 4) return;
  
    if (xhr.status != 200) {
      callback(xhr.response);
    } else {
      callback(null, xhr.response);
    }
  }  
}

function handleError(error) {
  console.error(error)
}

function handleResponse(error) {
  console.info(error)
}
