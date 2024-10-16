import css from "./ImageCard.module.css"
const ImageCard = ({small, alt_description, likes, location}) => {
  return (  
    <div className={css.imageCard}>
    <img src={small} alt={alt_description} className={css.image}/>
    <div className={css.info}>
    <p className={css.data}><span className={css.infoTerm}>Likes:</span> {likes}</p>
    <p className={css.data}><span className={css.infoTerm}>Location:</span> {location}</p>
    </div>
    </div>
  )
}

export default ImageCard