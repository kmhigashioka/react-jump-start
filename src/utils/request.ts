export default function request(url: string, options?: {} | undefined) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new ResponseError(response.statusText);
  error.response = response;
  throw error;
}

export class ResponseError extends Error {
  response: Response;

  constructor(message: string) {
    super(message);

    this.response = new Response();
  }
}

function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}
