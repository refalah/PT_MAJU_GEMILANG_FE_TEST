import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = ({album}) => {
    const router = useHistory();

    const goToPage = (id) => {
        router.push(`/picture/${id}`);
    };

    return (
        <div>
            <div className='cards'>
                <div className='card-container' onClick={() => goToPage(album.id)}>
                    <img src={album.thumbnailUrl}/>
                    <p className='card-text'>{album.title}</p>                  
                </div>
            </div>
        </div>
    )
}

export default Card
