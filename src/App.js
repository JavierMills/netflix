import React from 'react'
import { Row } from './Row/Row';
import './App.css';
import request from './Request/request';
import { Banner } from './Banner/Banner';
import { Nav } from './Nav/Nav'


export const App = () => {
  return (
    <div className='App'>
       <Nav />
       < Banner />

        <Row 
        title ='NETFLIX ORIGINALS' 
        fetchUrl={ request.fetchNetflixOriginals } 
        isLargeRow = { true }
        />
        <Row title ='Trending Now' fetchUrl= { request.fetchTrending }/>
        <Row title ='Top Rated' fetchUrl= { request.fetchTopRated }/>
        <Row title ='Action Movies' fetchUrl= { request.fetchActionMovies }/>
        <Row title ='Comedy Movies' fetchUrl= { request.fetchComedyMovies }/>
        <Row title ='Horror Movies' fetchUrl= { request.fetchHorrorMovies }/>
        <Row title ='Romance Movies' fetchUrl= { request.fetchRomanceMovies }/>
        <Row title ='Documentaries' fetchUrl= { request.fetchDocumentaries }/>
       


    </div>
  )
}


