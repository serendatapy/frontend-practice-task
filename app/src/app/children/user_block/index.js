import React from 'react'
import styles from './styles'
//import {getCaptionFromEdges} from './helpers'

const UserBlock = (props) => {
  const { data } = props
  return (
    <div style={styles.userblock}>
      <div>
        <img
          src={data.owner.profile_pic_url}
          style={styles.avatar}
          alt="user-avatar"//{getCaptionFromEdges(data.edge_media_to_caption)}
        />
      </div>
      <div>
        <p style={styles.username}>{data.owner.username}</p>
        <p style={styles.location}>{data.location.name}</p>
      </div>
    </div>
  )
}

export default UserBlock