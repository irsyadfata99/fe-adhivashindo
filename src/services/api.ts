import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth
export const registerAPI = (data: any) => api.post("/auth/register", data);
export const loginAPI = (data: any) => api.post("/auth/login", data);

// Content
export const getContentsAPI = (page = 1, limit = 10, search = "") =>
  api.get(`/contents?page=${page}&limit=${limit}&search=${search}`);
export const getContentByIdAPI = (id: number) => api.get(`/contents/${id}`);
export const createContentAPI = (data: any) => api.post("/contents", data);
export const updateContentAPI = (id: number, data: any) =>
  api.put(`/contents/${id}`, data);
export const deleteContentAPI = (id: number) => api.delete(`/contents/${id}`);

export default api;
