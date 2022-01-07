import axios from "axios";

const url = "http://localhost:3001/api/user";

const config = { withCredentials: true };

export const authUser = async (username, password) => {
  try {
    const response = await axios.post(`${url}/session`, { username, password }, config);
    return response.data;
  } catch (error) {
    return error?.response?.data || { success: false };
  }
};

export const logout = async () => {
  try {
    return await axios.delete(`${url}/session`, config);
  } catch (error) {
    return error;
  }
};

export const register = async (body) => {
  try {
    const response = await axios.post(`${url}`, body, config);
    return response.data;
  } catch (error) {
    return error?.response?.data || { success: false };
  }
};
