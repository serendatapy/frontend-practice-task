import React, { useState } from 'react'
import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/unliked_icon'

const LikeButton = ({ size, like }) => {
  const [liked, setLiked] = useState(like)
  return (
    <div onClick={() => setLiked(!liked)}>
      {
        liked ? <LikedIcon size={size}/> : <UnlikedIcon size={size}/>
      }
    </div>
  )
}

export default LikeButton
