import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

const controller = new AbortController();

const { signal } = controller;

class ApiClient {
  endpoint;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll = async () => {
    try {
      const { data } = await axiosInstance.get(this.endpoint, {
        signal: signal,
      });
      return data;
    } catch (err) {
      controller.abort();
      console.error(err);
      throw err;
    }
  };

  post = async values => {
    try {
      const { data } = await axiosInstance.post(this.endpoint, values);

      if (data && data.token)
        localStorage.setItem("token", JSON.stringify(data.token));
      return data;
    } catch (err) {
      console.error(err);
    }
  };
}

export default ApiClient;
