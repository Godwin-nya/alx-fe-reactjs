import axios from "axios";
import githubApi from "./githubApi";


export const fetchUserData = async (username) => {
  const response = await githubApi.get(`https://api.github.com/users/${username}`);
  return response.data;
};


