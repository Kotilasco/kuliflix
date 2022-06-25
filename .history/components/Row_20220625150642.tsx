import { ChevronLeftIcon } from '@heroicons/react/solid'
import React from 'react'
import { Movie } from '../typings'

interface Props{
  title: string
  movies: Movie[]
}

function Row({
  title,
  movies
}: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <ChevronLeftIcon />
      </div>
    </div>
  )
}

export default Row