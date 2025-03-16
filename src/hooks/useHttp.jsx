import { useEffect, useState, useCallback } from "react";

const sendHttpRequest = async (url, config) => {
   const response = await fetch(url, config);
   const resData = await response.json();
   if (!response.ok) {
      throw new Error(resData.message || "Something went wrong!");
   }
   return resData;
};

const useHttp = (url, config, initialData) => {
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState(initialData);

   const sendRequest = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
         const response = await sendHttpRequest(url, config);
         setData(response);
      } catch (error) {
         setError(error.message || "Something went wrong!");
      }
      setIsLoading(false);
   }, [url, config]);

   useEffect(() => {
      if (config && (config.method === "GET" || !config.method || !config)) {
         sendRequest();
      }
   }, [sendRequest, config]);

   return {
      error,
      isLoading,
      data,
      sendRequest,
   };
};
export default useHttp;
