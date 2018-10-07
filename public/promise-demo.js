sendFirstRequest()
  .then(function (response) {
    return sendSecondRequest(response);
  })
  .then(function (response) {
    return sendThirdRequest(response);
  })
  .catch(function (error) {
    handleError(error)
  });
