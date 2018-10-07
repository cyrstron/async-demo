sendRequest();

async function sendRequest() {
  try {
    const request = await fetch('/unstable?maxRandom=10');
    if (!request.ok) {
        throw new Error(request.statusText);
    }
    const response = await request.text();
    handleResponse(response);
  } catch (error) {
    handleError(error);
  }  
}

function handleError(error) {
  console.error(error);
}

function handleResponse(error) {
  console.info(error);
}