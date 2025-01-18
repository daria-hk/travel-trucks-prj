import axios from "axios";

export const fetchCampers = async (page = 1) => {
  try {
    const url = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`;
    const res = await axios.get(url);
    console.log(res);
    return res.data.items;
  } catch (error) {
    console.error("Error in API request:", error);
    throw error;
  }
};
