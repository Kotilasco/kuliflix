import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'

interface Props{
    netflixOriginals: Movie[]
}

function Banner({netflixOriginals}: Props) {
    //typescript it is of type Movie or it can be null
    const [movie, setMovie] = useState<Movie | null>(null)
    

    useEffect(() =>{
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, [netflixOriginals])

    console.log(movie);
  return (
    <div>
        <div>
        <Image
             src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
            />
        </div>
    </div>
  )
}

export default Banner