import ImageGallery from 'react-image-gallery';
import React from "react";


const MyGallery = ({images}) => {

    const new_images = images.map(({customData}) => {
        return {
            original: customData.url,
            thumbnail: customData.url,
        }
    })

    return (<ImageGallery thumbnailPosition={'left'} items={new_images} />);

}

export default MyGallery;