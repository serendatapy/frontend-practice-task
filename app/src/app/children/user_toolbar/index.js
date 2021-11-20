import React from 'react'
import styles from './styles'
import LikeButton from '../like_button'

const UserToolbar = (props) => {
  const { data } = props
  return (
    <div style={styles.toolbar}>
      <div>
        <div style={styles.likes}>
          6,224 likes
        </div>
        <div style={styles.time}>
          4 days ago
        </div>
      </div>
      <div>
      <LikeButton like={data.viewer_has_liked}/>
      </div>
    </div>
  )
}

export default UserToolbar