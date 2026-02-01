import axios from "axios";
import githubApi from "./githubApi";

export const searchUsers = async ({
  query,
  location,
  minRepos,
  page = 1,
  perPage = 10,
}) => {
  let q = query;

  if (location) q += ` location:${location}`;
  if (minRepos) q += ` repos:>=${minRepos}`;

  const response = await githubApi.get("https://api.github.com/search/users?q", {
    params: {
      q,
      page,
      per_page: perPage,
    },
  });

  return response.data;
};


export const fetchUserData = async (username) => {
  const res = await githubApi.get(`/users/${username}`);
  return res.data;
};


