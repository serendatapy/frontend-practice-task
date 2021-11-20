import React from 'react'
import styles from './styles'
import LikeButton from '../like_button'

const UserToolbar = (props) => {
  const { data } = props
  let differenceDate = (new Date().getTime()) - (data.taken_at_timestamp*1000)
  let daysAgo = Math.floor(differenceDate/1000/60/60/24)
  return (
    <div style={styles.toolbar}>
      <div>
        <div style={styles.likes}>
          {(data.edge_media_preview_like.count).toLocaleString()} likes
        </div>
        <div style={styles.time}>
                {daysAgo} days ago
        </div>
      </div>
      <div>
      <LikeButton size={"medium"} like={data.viewer_has_liked}/>
      </div>
    </div>
  )
}

export default UserToolbar