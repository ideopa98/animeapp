import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Home.css"

import SinglePage from './SinglePage';
const Home = () => {
    const [content, setContent] = useState([]);
   
    const fetchList= async()=>{
        const{data}= await axios.get('https://ghibliapi.herokuapp.com/films');
        setContent(data);
    };
    useEffect(()=>{
        fetchList();
     },[])
  return (<>
  {/* <input type="text" placeholder='search anime' className='search'/> */}
        
        <div className='Home'>
            
            { content && content.map((c)=>(<SinglePage 
                key={c.id}
                id={c.id}
                thumbnail={c.image}
                title={c.title}
                japanestitle={c.original_title}
                jetitle={c.original_title_romanised}
                banner={c.movie_banner}
                director={c.director}
                description={c.description}
                producer={c.producer}
                releasedate={c.release_date}
                duration={c.running_time}
                rating={c.rt_score}         
            />)
            
            )}
            
        </div>
        </>
  );
;}

export default Home;