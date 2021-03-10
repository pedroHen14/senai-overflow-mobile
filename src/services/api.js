import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.15:3333/",
});

// api.defaults.headers.common[
//   "Authorization"
// ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoicGVkcm8gaGVucmlxdWUiLCJpYXQiOjE2MTU0MDEwOTIsImV4cCI6MTYxNTQwNDY5Mn0.ydGN7twwaopgbtRCrYou8pDBrWvBLAQ_u4uAbGNMKC0`;

export { api };
