import http from "./httpService";

const apiEndpoint = "/auth";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
