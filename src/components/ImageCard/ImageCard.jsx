import css from "./ImageCard.module.css"
import { AiTwotoneLike } from "react-icons/ai";
const ImageCard = ({small, regular, description, likes, location, setSelectedImage, openModal}) => {
  const handleClick = () => {
    setSelectedImage({regular, location, description});
    openModal();
  }
  return (  
    <div className={css.imageCard}>
    <img src={small} alt={description} className={css.image} onClick={handleClick} />
    <div className={css.info}>
    <p className={css.data}><AiTwotoneLike /> {likes}</p>
    </div>
    </div>
  )
}

export default ImageCard