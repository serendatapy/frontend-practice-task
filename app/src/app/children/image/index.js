import React from 'react'
import styles from './styles'
import { getCaptionFromEdges } from './helpers'

const Image = (props) => {
  const { data } = props

  /**
   * unfortunately the display resources scontent address provided returned broken images
   * so I had to make local versions of the image to make this work, modifying the data.json file address.
   */

   const makeSrcSetString = (imageSet) => {
    let srcSet = "";
    imageSet.map(image => {
      srcSet += image.src+' '+image.config_width+'w,';
      console.log(srcSet)
     })
    return srcSet.slice(0,-1)
   }


  return (
      <img
        src={data.display_resources[0].src}
        srcSet={makeSrcSetString(data.display_resources)}
        style={styles}
        alt={getCaptionFromEdges(data.edge_media_to_caption)}
      />
  )
}

export default Image
