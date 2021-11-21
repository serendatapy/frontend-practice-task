import React from 'react'
import styles from './styles'

const UserBlock = ({ owner, location }) => {

  return (
    <div style={styles.userblock}>
      <img
        tabIndex="0"
        src={owner.profile_pic_url}
        style={styles.avatar}
        alt={owner.username + "avatar"}
      />
      <div style={styles.userblockText}>
        <p tabIndex="0" style={styles.username}>{owner.username}</p>
        <p tabIndex="0" style={styles.location}>{location.name}</p>
      </div>
    </div>
  )
}

export default UserBlock