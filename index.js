require("dotenv").config();
console.log(process.env.PORT)
const express = require("express");

const app = express();

const gitHubData = {
  login: "ranjeev23",
  id: 124865756,
  node_id: "U_kgDOB3FM3A",
  avatar_url: "https://avatars.githubusercontent.com/u/124865756?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/ranjeev23",
  html_url: "https://github.com/ranjeev23",
  followers_url: "https://api.github.com/users/ranjeev23/followers",
  following_url:
    "https://api.github.com/users/ranjeev23/following{/other_user}",
  gists_url: "https://api.github.com/users/ranjeev23/gists{/gist_id}",
  starred_url: "https://api.github.com/users/ranjeev23/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/ranjeev23/subscriptions",
  organizations_url: "https://api.github.com/users/ranjeev23/orgs",
  repos_url: "https://api.github.com/users/ranjeev23/repos",
  events_url: "https://api.github.com/users/ranjeev23/events{/privacy}",
  received_events_url: "https://api.github.com/users/ranjeev23/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 5,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-02-09T06:55:45Z",
  updated_at: "2024-05-02T17:16:01Z",
};

const port = 3000;

app.get("/", (req, res) => {
  console.log(req, res);
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("_.ranju@23");
});

app.get("/login", (req, res) => {
  res.send("<h1>please complete the course<h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>This is my code<h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${port}`);
});

app.get('/github', (req, res) => {
  res.json(gitHubData)
})
