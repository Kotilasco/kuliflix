import Image from 'next/image'
import React, { useEffect, useState } from 'react'
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
            
        </div>
    </div>
  )
}

export default Banner