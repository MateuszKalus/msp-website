import ImageGallery from 'react-image-gallery';
import React from "react";

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

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