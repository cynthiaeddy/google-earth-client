import React from 'react'
import ImageCard from './ImageCard'

const ImageViewer = (props) => {
  return (
    <>
      <button onClick={props.handleGoHome} />
      <ImageCard image={props.image} handleGoHome={props.handleGoHome} />
    </>
  )
}

export default ImageViewer
