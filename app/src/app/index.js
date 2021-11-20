import React from 'react'
import Image from './children/image'
import UserBlock from './children/user_block'
import CommentsBlock from './children/comments_block'
import LikeButton from './children/like_button'
import styles from './styles'

const App = (props) => {
  const { data } = props
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <UserBlock data={data}/>
        <CommentsBlock data={data}/>
        <LikeButton />
      </div>
    </main>
  )
}

export default App
