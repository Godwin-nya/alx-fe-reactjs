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

  const response = await githubApi.get("/search/users", {
    params: {
      q,
      page,
      per_page: perPage,
    },
  });

  return response.data;
};


export const fetchUserDetails = async (username) => {
  const res = await githubApi.get(`/users/${username}`);
  return res.data;
};


