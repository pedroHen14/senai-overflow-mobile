import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333/",
});

api.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjIsInN0dWRlbnROYW1lIjoiZ3VpbGhydWVodWVyaCIsImlhdCI6MTYxNDk3MDYwOSwiZXhwIjoxNjE0OTc0MjA5fQ.JjXq8cak2ZozppfiX4STRSlyEYkzkh5ZDJm3IfL6QjU`;

export { api };
