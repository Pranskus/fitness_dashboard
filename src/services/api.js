import axios from "axios";

const API_KEY = "ihjuySwDRiKbfO2V+PBr0Q==Jk3lQiqLBTIuK9C2";
const BASE_URL = "https://api.api-ninjas.com/v1/exercises";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-Api-Key": API_KEY,
  },
});

export const getExercises = async (params) => {
  try {
    const response = await api.get("", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    throw error;
  }
};
