import axios from "axios";

//pendiente endpoint
const url = "api/login"

export const authUser = async (username, password) => {
    const response = await axios.post (url, {username, password});
    return response.data; 
}