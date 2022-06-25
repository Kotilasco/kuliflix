import Image from 'next/image'
import React from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'

interface Props{
    movie: Movie
  }

function Thumbnail({movie}: Props) {
  return (
    <div>
        <Image 
            src={`${movie.backdrop_path || movie.poster_path}`}
            layout='fill'
        />
    </div>
  )
}

export default Thumbnail