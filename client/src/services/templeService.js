import api from "./api";

// Get all temples
export const getAllTemples = async () => {
  const response = await api.get("/temples");
  return response.data;
};

// Get single temple
export const getTempleById = async (id) => {
  const response = await api.get(`/temples/${id}`);
  return response.data;
};

// Create temple
export const createTemple = async (templeData) => {
  const response = await api.post("/temples", templeData);
  return response.data;
};

// Update temple
export const updateTemple = async (id, templeData) => {
  const response = await api.put(`/temples/${id}`, templeData);
  return response.data;
};

// Delete temple
export const deleteTemple = async (id) => {
  const response = await api.delete(`/temples/${id}`);
  return response.data;
};