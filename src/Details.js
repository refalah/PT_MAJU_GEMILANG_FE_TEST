import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import {Context} from './favContext';

function Details() {
    const [state, dispatch] = useContext(Context);

    const params = useParams();

    
    const [post, setPost] = useState([]);
    // const [favs, setFavs] = useState([]);

    const addFav = (p) => {
        const add = [{id: params.id}]
        dispatch({
            type: "ADD_FAVORITES",
            payload: {
                p
            }
        })
    }

    const viewData = () => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((res) => res.json()).then((json) => setPost(json))
    }

    useEffect(() => {
      viewData();
    }, [])

    return (
        <div>
            <div className='container '>
              
                    {post.filter(p => p.id === parseInt(params.id)).map(p => (
                      <div className='content' key={p.id}>
                        <p className='picture-title'>Title: {p.title}</p>
                        <img className='picture' src={p.thumbnailUrl}></img>
                        <button className='btn' onClick={() => addFav(p)}>Add to Favorites</button>
                      </div>        
                    ))}  
            </div>
        </div>
    )
}

export default Details
