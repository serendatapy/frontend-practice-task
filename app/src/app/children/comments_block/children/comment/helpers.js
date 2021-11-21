export function getCaptionFromEdges (data) {
  return data.edges[0].node.text
}

export function formatAts (rawComment) {
  const regex = /(@[a-z0-9\_.]*|#[a-z0-9]*)/gi;
  return {__html: rawComment.replace(regex, '<a href="#" style="color: blue">$1</a>')};
}
