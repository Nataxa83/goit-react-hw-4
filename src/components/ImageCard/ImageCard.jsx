import css from "./ImageCard.module.css"
const ImageCard = ({small, alt_description, likes, location}) => {
  return (  
    <div className={css.imageCard}>
    <img src={small} alt={alt_description} className={css.image}/>
    <div className={css.info}>
    <p ><span className={css.likes}>Likes:</span> {likes}</p>
    <p ><span className={css.location}>Location:</span> {location}</p>
    </div>
    </div>
  )
}

export default ImageCard