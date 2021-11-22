export function getCaptionFromEdges (data) {
  return data.edges[0].node.text
}

  /**
   * unfortunately the display resources scontent address provided returned broken images
   * so I had to make local versions of the image to make this work, modifying the data.json file address.
   * In any case image delivery handling can be dealt with by a CDN quite gracefully.
   */

export function makeSrcSetString (imageSet) {
  let srcSet = imageSet.reduce((prev,image, index) => {
    let currentValue = `${image.src} ${image.config_width}w,`
    return index = 0 ? currentValue : prev + currentValue
   },"")

  return srcSet.slice(0,-1)

 }
