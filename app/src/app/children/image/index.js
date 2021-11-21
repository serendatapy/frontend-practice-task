import React from 'react'
import styles from './styles'
import { getCaptionFromEdges } from './helpers'
import { makeSrcSetString } from './helpers'

const Image = ({imageSet,imageCaption,accessibilityCaption}) => {

  return (
      <img
        tabIndex="0"
        src={imageSet[0].src}
        srcSet={makeSrcSetString(imageSet)}
        style={styles}
        alt={"Photo with user comment: " + getCaptionFromEdges(imageCaption)}
        aria-label={accessibilityCaption || "No description of photo provided"}
      />
  )
}

export default Image
