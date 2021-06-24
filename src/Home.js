import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Card from './Card';

function Home() {
    const router = useHistory();

    const goToPage = () => {
        router.push(`/favorites`);
    };

    const [post, setPost] = useState([]);
    const [search, setSearch] = useState('');  

    const viewData = () => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then((res) => res.json()).then((json) => setPost(json))
    }

    useEffect(() => {
      viewData();
    }, [])

    console.log(post)

    return (
        <div>
            <div className='container '>
                <div className='header-top'>
                    <input 
                    type='text' 
                    placeholder="Search here" 
                    className='searchbar' 
                    onChange={e => {setSearch(e.target.value)}}></input>
                    <button className='btn-2' onClick={() => goToPage()}>Favorites</button>
                </div>
           
              <div className='cardss'>
                  <div className='row'>
                    {post&&post.filter(p => {
                        if (search === ""){
                            return p
                        } else if (p.title.toLowerCase().includes(search.toLowerCase())) {
                            return p
                        }
                    }).map(p => (
                      <div className='col' key={p.id}>
                        <Card album={p}/>  
                      </div>        
                    ))}              
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Home
