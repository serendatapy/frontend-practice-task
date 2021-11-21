import React, { useEffect, Suspense } from 'react'
import UserBlock from './children/user_block'
import styles from './styles'
import UserToolbar from './children/user_toolbar'

const CommentsBlock = React.lazy(() => import('./children/comments_block'))
const Image = React.lazy(() => import('./children/image'))

const App = (props) => {
  const { data } = props

  /**
   * Here we might use react helment to deal with a more complex use case
   */
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Student Beans message wall`;
    let el = document.querySelector("meta[name='description']")
    el.setAttribute('content', 'comments on the post made by the user')
  });

  return (
    <main style={styles.main}>
      <div style={styles.image}>
      <Suspense fallback={<div>Loading...</div>}>
        <Image imageSet={data.display_resources} imageCaption={data.edge_media_to_caption} accessibilityCaption={data.accessibilityCaption} />
      </Suspense>
      </div>
      <div style={styles.text}>
        <UserBlock owner={data.owner} location={data.location} />
        <Suspense fallback={<div style={{overflow: 'auto', flex: '1 0 50vh'}}>Loading...</div>}>
          <CommentsBlock mediaComments={data.edge_media_to_comment.edges} owner={data.owner} imageCaption={data.edge_media_to_caption} data={data} />
        </Suspense>
        <UserToolbar data={data} />
      </div>
    </main>
  )
}

export default App
