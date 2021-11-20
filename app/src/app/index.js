import React from 'react'
import Image from './children/image'
import UserBlock from './children/user_block'
import CommentsBlock from './children/comments_block'
import styles from './styles'
import UserToolbar from './children/user_toolbar'

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
        <UserToolbar data={data}/>
      </div>
    </main>
  )
}

export default App
