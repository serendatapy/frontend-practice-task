import React from 'react'
import styles from './styles'
import Comment from './children/comment/index'
import { getCaptionFromEdges } from './helpers'
import LikeButton from '../like_button/index'

const CommentsBlock = (props) => {
  const { data } = props
  return (
    <div style={styles.commentList}>
      <Comment key={data.id} username={data.owner.username} userComment={getCaptionFromEdges(data.edge_media_to_caption)} />
      {data.edge_media_to_comment.edges.map(comment => {
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