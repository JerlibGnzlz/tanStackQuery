import axios from "axios";

export const gitHubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
