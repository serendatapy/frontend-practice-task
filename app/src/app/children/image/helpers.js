export function getCaptionFromEdges (data) {
  return data.edges[0].node.text
}

  /**
   * unfortunately the display resources scontent address provided returned broken images
   * so I had to make local versions of the image to make this work, modifying the data.json file address.
   * While I was at it, I also compressed them and made webp formats which I used instead. I didn't use AVIF
   * as it's not widely supported yet. In any case image delivery handling can be dealt with by a CDN quite gracefully.
   */

export function makeSrcSetString (imageSet) {
  let srcSet = "";
  imageSet.map(image => {
    srcSet += image.src+' '+image.config_width+'w,';
    console.log(srcSet)
   })
  return srcSet.slice(0,-1)
 }
