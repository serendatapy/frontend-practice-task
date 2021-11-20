import React, { useState } from 'react'
import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/unliked_icon'

const LikeButton = ({ like }) => {
  const [liked, setLiked] = useState(like)
  return (
    <div onClick={() => setLiked(!liked)}>
      {
        liked ? <LikedIcon /> : <UnlikedIcon />
      }
    </div>
  )
}

export default LikeButton
