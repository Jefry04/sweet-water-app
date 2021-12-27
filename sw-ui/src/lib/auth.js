import axios from "axios";

const url = "http://localhost:3001/api/user/session"

export const authUser = async (username, password) => {
  try {
    const response = await axios.post (url, {username, password});
    return response.data; 
  } catch (error){
    return error?.response?.data || {success:false}
  }

}