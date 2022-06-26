import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Title from './Components/Title';
import Card from './Components/Card';

function App() {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=fr&api_key=XXX')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    },[]);

    useEffect(() => {
        document.title = "20 Films Populaires"
    })

    return (
        <div>
            <Title/>
            <Gallery>
                {movies.slice(0,20).map((movie) =>
                    <Card key={movie.id} {...movie} /> 
                )}
            </Gallery>
        </div>
    );
}

export default App;

const Gallery = styled.div`
    padding: 0 30px 30px 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`