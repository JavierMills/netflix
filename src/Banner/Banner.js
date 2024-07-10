import requests from '../Request/request'
import React, { useEffect, useState } from 'react'
import axios from '../Axios/axios';
import './Banner.css'


export const Banner = () => {

    const [ movie, setMovie] = useState([]);

      useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(requests.fetchNetflixOriginals);

            console.log('respuesta', request.data.results);
            setMovie(
              request.data.results[ 
                Math.floor(Math.random() * request.data.results.length - 1)]
            );
              return request;
             
        }
        
        return fetchData();
      },[]);

      console.log(movie);
      
    const truncate  = (str, n) => {
      return str?.length > n ? str.substr(0, n-1) + "..." : str; 
  }

 
  return (
    <header className='banner'
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      
      backgroundPosition: "center center",
    }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>
              {movie?.name|| movie?.title || movie?.original_title } 

            </h1>
             <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
             </div>
             <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>

             <div className='banner_footer'></div>
</div>
    </header>
  )
}
