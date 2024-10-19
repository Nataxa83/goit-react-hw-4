import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"
const ImageGallery = ({images}) => {
  return (
    <ul className={css.gallery}>
        {images.map(({id, description, likes, urls: {small, regular}, user:{location}}) => {
          return (
            <li key={id}>
              <ImageCard
              small={small} 
              regular={regular}
              description={description}
              likes={likes}
              location={location}
              className={css.imageCard}
              />
            </li>

          )
        })}
</ul>

  )
}

export default ImageGallery