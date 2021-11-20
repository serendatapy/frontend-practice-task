import React from 'react'
import styles from './styles'

const Comment = (props) => {
  const {username, userComment} = props
  return (
    <div>
      <p>
        <span style={styles.username}>{username}</span>
        <span style={styles.userComment}>{userComment}</span>
      </p>
    </div>
  )
}

export default Comment