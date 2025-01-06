import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.SERVER_URL || "http://localhost:8000",
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
      console.error(err);
      return null;
    }
  };

  post = async values => {
    try {
      const { data } = await axiosInstance.post(this.endpoint, values);
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
}

export default ApiClient;
