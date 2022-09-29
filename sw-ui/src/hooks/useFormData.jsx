import axios from "axios";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useFormData = (endPoint = "") => {
  const { data, error } = useSWR(`http://localhost:3001/api/forms/${endPoint}`, fetcher);

  return error ? null : data;
};
