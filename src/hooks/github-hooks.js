import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStars } = useContext(
    GithubContext
  );

  return { githubState, getUser, getUserRepos, getUserStars };
};

export default useGithub;
