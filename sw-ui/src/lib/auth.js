import axios from "axios";

const url = "http://localhost:3001/api";

const config = { withCredentials: true };

export const authUser = async (username, password) => {
  try {
    const response = await axios.post(`${url}/user/session`, { username, password }, config);
    return response.data;
  } catch (error) {
    return error?.response?.data || { success: false };
  }
};

export const logout = async () => {
  try {
    return await axios.delete(`${url}/user/session`, config);
  } catch (error) {
    return error;
  }
};

export const register = async (body) => {
  try {
    const response = await axios.post(`${url}/user`, body, config);
    return response.data;
  } catch (error) {
    return error?.response?.data || { success: false };
  }
};
