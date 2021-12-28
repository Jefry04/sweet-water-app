import axios from "axios";

const url = "http://localhost:3001/api/user/session";

export const authUser = async (username, password) => {
  try {
    const response = await axios.post(
      url,
      { username, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    return error?.response?.data || { success: false };
  }
};

export const logout = async () => {
  try {
    const response = await axios.delete(url, { withCredentials: true });
    return response;
  } catch (error) {
    return error;
  }
};
