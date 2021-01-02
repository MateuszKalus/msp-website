import ImageGallery from 'react-image-gallery';
import React from "react";


const MyGallery = ({images}) => {

    const new_images = images.map(({url}) => {
        return {
            original: url,
            thumbnail: url,
        }
    })

    return (<ImageGallery thumbnailPosition={'left'} items={new_images} />);

}

export default MyGallery;