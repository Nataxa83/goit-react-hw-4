import axios from "axios";
import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const App = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  // console.log(searchValue);
  
  useEffect(() => {
    // const ACCESS_KEY = 'hKPMlatOY64AlkJ4VOiBsiFkQnhoXS5yR5titRTlXn8';
    const fetchImage = async ()=> {
      try {
      setLoading(true);
      const { data } = await axios.get('https://api.unsplash.com/photos/?client_id=hKPMlatOY64AlkJ4VOiBsiFkQnhoXS5yR5titRTlXn8')
      
      // throw new Error('Something went wrong');
      setImages(data);


      } catch (error) {
    setError(error.message);
      } finally{
    setLoading(false);
      }
    }
    
    fetchImage();
    },[])

  const onSubmit = (searchWord) => {
    // setImages([]);
    // setPageNumber(1);
    setSearchValue(searchWord);
    console.log(searchWord);
  };

  return (
    <div>
      <SearchBar onSearch={onSubmit} />
      {loading && <Loader />}
      {error && <p>Oops, something went wrong: {error}</p>}
      {images !== null &&  <ImageGallery images={images}/> }
      {/* <div>
      <ul>
        {images !== null && images.map((image) => {
          return (
            <li key={image.id}>
                <div>
                <img src={image.urls.thumb} alt={image.alt_description} width={200} height={150}/>
                <p>Likes: {image.likes}</p>
                </div>
            </li>

          )
        })}
        </ul>
      </div> */}
    </div>
  );
};

export default App;
