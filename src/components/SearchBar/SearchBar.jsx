import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userValue = e.target.elements.searchValue.value.trim();
    if (userValue === "") {
      toast.error("Please enter a valid search value!", {
        duration: 4000,
        position: "top-left",
      });
    } else onSubmit(userValue);
  };
  return (
    <>
      <header className={css.searchBar}>
        <Toaster />
        <form onSubmit={handleSubmit} className={css.inputForm}>
          <input
            className={css.input}
            type="text"
            name="searchValue"
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
