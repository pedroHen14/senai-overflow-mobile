import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.15:3333/",
});

api.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoicGVkcm8gaGVucmlxdWUiLCJpYXQiOjE2MTUyMzM4MDgsImV4cCI6MTYxNTIzNzQwOH0.p8rsS4LYziki-fvzTKof6vA7HpaWksKgB8b8syMtttY`;

export { api };
