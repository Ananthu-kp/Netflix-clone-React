
import React from 'react'

function ShimmerPoster({isSmall}) {
  return (
    <div className={`shimmer-wrapper ${isSmall ? 'smallPoster' : 'poster'}`}>
      
    </div>
  )
}

export default ShimmerPoster

