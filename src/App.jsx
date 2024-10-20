import { useEffect, useState } from "react";
import { renderImage } from "./api";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";  
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);  
  const [totalPages, setTotalPages] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const onSearch = (searchWord) => {
    setImages([]);
    setPageNumber(1);
    setSearchValue(searchWord);
  };

  const onLoadMore = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
    console.log(pageNumber);
  }

  const openModal = (image) => {
    //setSelectedImage(image);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!searchValue) return;
    const fetchImageByValue = async ()=> {
      try {
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
     { images !== null &&  
     <ImageGallery images={images}
                    openModal={openModal}
                    setSelectedImage={setSelectedImage}/> }
     
     {totalPages > pageNumber  && <LoadMoreBtn onLoadMore={onLoadMore}/>  }
     
     {<ImageModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        regular={selectedImage?.regular}
        location={selectedImage?.location}
        description={selectedImage?.description}
      />}
     
    </div>
  );
};

export default App;
