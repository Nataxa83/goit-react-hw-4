import { useEffect, useState } from "react";
import { renderImage } from "./api";

import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";  
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);  
  const [totalPages, setTotalPages] = useState(0);
  
  const onSearch = (searchWord) => {
    setImages([]);
    // setPageNumber(1);
    setSearchValue(searchWord);
  };

  const onLoadMore = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
    console.log(pageNumber);
  }

  useEffect(() => {
    if (!searchValue) return;
    const fetchImageByValue = async ()=> {
      try {
        // setError(false);
      setLoading(true);
      const data = await renderImage(searchValue, pageNumber);
      // throw new Error('Something went wrong');
    
        setImages((prevState) => pageNumber === 1 ? data.results : [...prevState, ...data.results]);
         setTotalPages(data.total_pages);

      

      } catch (error) {
    setError(error.message);
      } finally{
    setLoading(false);
      }
    }
    
    fetchImageByValue();
    },[searchValue, pageNumber]);


  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {loading && <Loader />}
      {error !== null && <ErrorMessage error={error}/> }
     { images !== null &&  <ImageGallery images={images}/> }
     
     {totalPages > pageNumber  && <LoadMoreBtn onLoadMore={onLoadMore}/>  }
     
    </div>
  );
};

export default App;
