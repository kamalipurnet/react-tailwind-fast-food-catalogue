import axios from "axios";
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: "http://localhost:1337/api",
});
const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true)
      const result = await instance.request(axiosParams);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  },[axiosParams.url]);
  return [ response, error, loading ];
};
export default useAxios;
