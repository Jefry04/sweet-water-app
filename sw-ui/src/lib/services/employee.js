import axios from "axios";

const url = "http://localhost:3001/api/employee";

const config = { withCredentials: true };

export const saveEmployee = async (body) => {
  try {
    const response = await axios.post(`${url}`, body, config);
    return response.data;
  } catch (error) {
    return error?.response?.data || { success: false };
  }
};
