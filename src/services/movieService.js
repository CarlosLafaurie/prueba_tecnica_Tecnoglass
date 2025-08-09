import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies({ searchTerm = "", type = "", year = "", page = 1 }) {
  if (!searchTerm.trim()) return [];

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: searchTerm,
        type,
        y: year,
        page
      }
    });
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export async function getMovieById(id, plot = "short") {
  if (!id) return null;

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: id,
        plot
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    return null;
  }
}

export async function getMovieByTitle(title, plot = "short") {
  if (!title.trim()) return null;

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        t: title,
        plot
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie by title:", error);
    return null;
  }
}
