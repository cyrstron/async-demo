fetch('/unstable?maxRandom=10')
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    response.text();
  })
  .then(response => handleResponse(response))
  .catch(error => handleError(error));

function handleError(error) {
  console.error(error)
}

function handleResponse(error) {
  console.info(error)
}