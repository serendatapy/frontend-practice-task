import React from 'react'
import styles from './styles'
import Comment from './children/comment/index'
import { getCaptionFromEdges } from './helpers'

const CommentsBlock = (props) => {
  const { data } = props
  return (
    <div style={styles.commentList}>
      <Comment key={data.id} username={data.owner.username} userComment={getCaptionFromEdges(data.edge_media_to_caption)} />
      {data.edge_media_to_comment.edges.map(comment => {
        return (
          <Comment key={comment.node.id} username={comment.node.owner.username} userComment={comment.node.text} />
        )
      })}
    </div>
  )
}

export default CommentsBlock