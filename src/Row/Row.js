import axios from '../Axios/axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

export const Row = ( { title, fetchUrl, isLargeRow }) => {

    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);

    const [ trilerUrl , setTrilerUrl ] = useState("");
    

    useEffect(() => {
        
        async function fetchData() {
            const request = await axios.get( fetchUrl );
            setMovies( request.data.results)
            console.log(request);
                return request;
        }  
        fetchData();
    }, [ fetchUrl ]);

   
    
    const opts = {
        height : "390",
        width : "100%",
        playerVars: {
            autoplay: 1,
        }
    }

  const handleClick = (item) => {
        if (trilerUrl){
            setTrilerUrl("");

        }else {
            movieTrailer(item?.name ||item?.title || item?.original_title ||  "")
                .then((url) => {
                    const urlParams = new URLSearchParams( new URL(url).search) ;
                    setTrilerUrl(urlParams.get("v"));
                })
                .catch ((error) =>console.log(error));
        }

  }


  return (
    <div className='row'>
        <h2> { title } </h2>
        <div className='row_images'>
        {
            movies.map(item => (
                <img 
                key={ item.id }
                onClick={ () => handleClick(item)}
                 className={`row__image ${ isLargeRow && 'row_posterLarger'}`}
                 
                 
                 src={`${ base_url }${
                isLargeRow ? item.poster_path : item.backdrop_path}` } 
                alt={ item.name }
                 />
            ))
        }
        </div>
        { trilerUrl && <YouTube videoId={ trilerUrl } opts={ opts } />}
    </div>
  )
}
