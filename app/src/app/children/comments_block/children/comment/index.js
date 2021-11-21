import React from 'react'
import styles from './styles'
import { formatAts } from './helpers'


const Comment = ({ username, userComment}) => {
  return (
    <p tabIndex="0" role="article" aria-label={"Comment from "+username}>
      <span style={styles.username}>{username}</span>
      <span style={styles.userComment} dangerouslySetInnerHTML={formatAts(userComment)}></span>
    </p>
  )
}

export default Comment