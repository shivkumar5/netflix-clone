import React from 'react'

function MoviePoster({title, imgPath, isLargeRow, onPosterClick}) {
  return (
    <>
      <img onClick={onPosterClick} className={`poster ${isLargeRow?'poster--large':''}`} src={imgPath} alt={title} />
    </>
  )
}

export default MoviePoster
