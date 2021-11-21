import React from 'react'
import styles from './styles'
import Comment from './children/comment/index'
import { getCaptionFromEdges } from './helpers'
import LikeButton from '../like_button/index'

/**
 * Here we might need to introduce a virtualization library to deal with having lots of posts
 */

const CommentsBlock = ({mediaComments,owner,imageCaption}) => {
  return (
    <div style={styles.commentList}>
      <Comment username={owner.username} userComment={getCaptionFromEdges(imageCaption)} />
      {mediaComments.map(comment => {
        return (
          <div style={styles.commentContainer} key={comment.node.id}>
            <div style={styles.comment}>
              <Comment username={comment.node.owner.username} userComment={comment.node.text} />
            </div>
            <div style={styles.likeComment}>
              <LikeButton size={"small"} style={styles.likeComment} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CommentsBlock