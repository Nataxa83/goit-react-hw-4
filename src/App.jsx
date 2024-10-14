import { useEffect, useState } from "react";
import { renderImage } from "./api";

import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";  

const App = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  // console.log(searchValue);
  
  useEffect(() => {

    const fetchImage = async ()=> {
      try {
      setLoading(true);
      const data = await renderImage();
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
      {error !== null && <ErrorMessage error={error}/> }
     { images !== null &&  <ImageGallery images={images}/> }
     
    </div>
  );
};

export default App;
