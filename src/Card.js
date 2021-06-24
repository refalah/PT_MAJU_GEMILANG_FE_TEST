import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = ({album, fav}) => {
    const router = useHistory();

    const goToPage = (id) => {
        router.push(`/picture/${id}`);
    };

    return (
        <div>
            {album&&album ? (
                <div className='cards'>
                <div className='card-container' onClick={() => goToPage(album.id)}>
                    <img src={album.thumbnailUrl}/>
                    <p className='card-text'>{album.title}</p>                  
                </div>
                </div>
            ) : (
                <div className='cards'>
                <div className='card-container' onClick={() => goToPage(fav.id)}>
                    <img src={fav.thumbnailUrl}/>
                    <p className='card-text'>{fav.title}</p>                  
                </div>
                </div>
            )}
            
        </div>
    )
}

export default Card
