class HttpRequestError extends Error {
  status;
  data;
  success;

  constructor(response, status) {
    super(response.message);
    this.name = this.constructor.name;
    this.status = status;
    this.data = response.data;
    this.success = response.success
  }
}

export default HttpRequestError;
