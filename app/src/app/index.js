import React, { useEffect, Suspense, useState } from 'react'
import UserBlock from './children/user_block'
import styles from './styles'
import UserToolbar from './children/user_toolbar'

const CommentsBlock = React.lazy(() => import('./children/comments_block'))
const Image = React.lazy(() => import('./children/image'))

const App = (props) => {
  const { data } = props

  /**
   * This part handles the media query, I usually do it on a style sheet though
   * I couldn't figure out how to do it inline, so I used this function to
   * give myself some flexibility. I assumed the maximum device size was the mock
   * provided and adapted styles for mobile.
   */
  const mediaMatch = window.matchMedia('(max-width: 934px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    console.log('Media Query Activated', matches)
    return () => mediaMatch.removeListener(handler);
  });

  /**
   * Here we might use react helment to deal with a more complex use cases
   * of routing and meta tags
   */
  useEffect(() => {
    document.title = `Student Beans message wall`;
    let el = document.querySelector("meta[name='description']")
    el.setAttribute('content', 'comments on the post made by the user')
  });

  return (
    <main style={styles.main(matches)}>
      <div style={styles.image(matches)}>
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
