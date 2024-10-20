import css from "./ImageCard.module.css"
const ImageCard = ({small, regular, description, likes, setSelectedImage, openModal}) => {

  const handleClick = () => {
    setSelectedImage({small, regular,description});
    openModal();
  }
  return (  
    <div className={css.imageCard}>
    <img src={small} alt={description} className={css.image} onClick={handleClick} />
    <div className={css.info}>
    <p className={css.data}><span className={css.infoTerm}>Likes:</span> {likes}</p>
    {/* <p className={css.data}><span className={css.infoTerm}>Location:</span> {location}</p> */}
    </div>
    </div>
  )
}

export default ImageCard