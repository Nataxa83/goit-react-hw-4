import React from 'react'

const ImageGallery = ({images}) => {
  return (
    <ul>
        {images !== null && images.map((image) => {
          return (
            <li>
                <div>
                <img src={url.small} alt={alt} />
                </div>
            </li>

          )
        })}
</ul>

  )
}

export default ImageGallery