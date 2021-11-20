import React from 'react'
import Image from './children/image'
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
        <p>User block</p>
        <p>Comments block</p>
        <LikeButton />
      </div>
    </main>
  )
}

export default App
