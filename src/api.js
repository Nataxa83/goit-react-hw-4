import axios from "axios";

const API_KEY = "hKPMlatOY64AlkJ4VOiBsiFkQnhoXS5yR5titRTlXn8";
axios.defaults.baseURL = "https://api.unsplash.com";

axios.defaults.params = {
  orientation: "landscape",
  per_page: 6,

};

// export const renderImage = async () => {
  // const { data } = await axios.get(
  //   `/photos?client_id=${API_KEY}`
  // );

  // return data;
  export const renderImage = async (query='cat') => {
    const { data } = await axios.get(
      `/search/photos?client_id=${API_KEY}&query=${query}`
    );
  
    return data;
  };
// };


// import axios from "axios";

// axios.defaults.baseURL = 'https://api.unsplash.com/';

// export async function renderImage(searchValue, page){
//     const axiosOptions = {
//         params: {
//             client_id: 'hKPMlatOY64AlkJ4VOiBsiFkQnhoXS5yR5titRTlXn8',
//             query: searchValue,
//             page: page,
//             per_page: 12,
//             orientation: 'landscape',
//         }
//     }
//         return axios.get('search/photos', axiosOptions);

// }