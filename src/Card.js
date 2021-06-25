import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {Context} from './favContext';

const Card = ({album, fav}) => {
    const router = useHistory();
    const [state, dispatch] = useContext(Context)
    const goToPage = (id) => {
        router.push(`/picture/${id}`);
    };

    const removeFav = (id) => {
        dispatch({
            type: "REMOVE_FAVORITES",
            payload: {
                p: {id}
            }
        })
    }

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
                <div className='card-container' onClick={() => removeFav(fav.id)}>
                    <img src={fav.thumbnailUrl}/>
                    <p className='card-text'>{fav.title}</p>                  
                </div>
                </div>
            )}
            
        </div>
    )
}

export default Card
