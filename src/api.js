import axios from "axios";

const API_KEY = "hKPMlatOY64AlkJ4VOiBsiFkQnhoXS5yR5titRTlXn8";
axios.defaults.baseURL = "https://api.unsplash.com";

axios.defaults.params = {
  orientation: "landscape",
  per_page: 20,
};

export const renderImage = async () => {
  const { data } = await axios.get(
    `/photos?client_id=${API_KEY}`
  );

  return data;
};

