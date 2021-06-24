import React, {useState, useEffect, useContext} from 'react';
import Card from './Card';
import {Context} from './favContext'

function Favorite() {

    const [state, dispatch] = useContext(Context)
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

    console.log(state.favs)

    return (
        <div>
            <div className='cardss'>
                  <div className='row'>
                    {state.favs.map(p => (
                      <div className='col' key={p.id}>
                        <Card fav={p}/>  
                      </div>        
                    ))}              
                  </div>
              </div>
        </div>
    )
}

export default Favorite
