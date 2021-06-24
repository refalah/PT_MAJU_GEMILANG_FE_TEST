import React, {useState, useEffect, useContext} from 'react';
import Card from './Card';
import {ContextProvider} from './favContext'

function Favorite() {

    const [state, dispatch] = useContext(ContextProvider)
    const [post, setPost] = useState([]);
    const [favs, setFavs] = useState([]);

    const removeFav = (p) => {
        setFavs([...favs, p])
    }

    const viewData = () => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((res) => res.json()).then((json) => setPost(json))
    }

    useEffect(() => {
      viewData();
    }, []);

    return (
        <div>
            <div className='cardss'>
                  <div className='row'>
                    {state.favs.map(p => (
                      <div className='col' key={p.id}>
                        <Card album={p}/>  
                      </div>        
                    ))}              
                  </div>
              </div>
        </div>
    )
}

export default Favorite
