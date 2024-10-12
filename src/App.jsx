import axios from "axios";

import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";

const App = () => {
  const [images, setImages] = useState(null);
  const [searchValue, setSearchValue] = useState(null);

  const onSubmit = (searchValue) => {
    setImages([]);
    // setPageNumber(1);
    setSearchValue(searchValue);
    console.log(searchValue);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
    </div>
  );
};

export default App;
