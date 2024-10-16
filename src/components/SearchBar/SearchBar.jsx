import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

// const INITIAL_VALUES = {
//   searchWord: "",
// };
const SearchBar = ({ onSearch }) => {
  const handleSubmit =(values, action) => {
    e.preventDefault();
    const userValue = e.target.elements.searchWord.value.trim();
    // if (userValue === "") {
    //   toast.error("Please enter a valid search value!", {
    //     duration: 4000,
    //     position: "top-left",
    //   });
    // } else onSearch(userValue);              
    onSearch(values.searchWord); 
    action.resetForm();
  };
  
  return (
    <>
      <header className={css.searchBar}>
        <Toaster />
        <form onSubmit={handleSubmit} className={css.inputForm} >
          <input
            className={css.input}
            type="text"
            name="searchWord"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.inputBtn}>
            <IoIosSearch className={css.icon} />
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
