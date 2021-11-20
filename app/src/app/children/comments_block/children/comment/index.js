import React from 'react'
import styles from './styles'

const Comment = (props) => {
  const formatAts = text => {
    const regex = /(@[a-z0-9\_.]*|#[a-z0-9]*)/gi;
    return {__html: text.replace(regex, '<a href="#" style="color: blue">$1</a>')};
  }

  const {username, userComment} = props
  return (
    <div>
      <p>
        <span style={styles.username}>{username}</span>
        <span style={styles.userComment} dangerouslySetInnerHTML={formatAts(userComment)}></span>
      </p>
    </div>
  )
}

export default Comment