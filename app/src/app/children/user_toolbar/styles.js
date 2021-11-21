/**
 * Although the time in the wireframe was displayed with what I think
 * was a #a2a2a2 colour, this didn't pass tests for accessibility
 * so I changed it to #605C5C which is an AA as a compromise.
 * if AAA was the target then #484747 could be used instead
 */

export default {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 20px 0px 0px',
    flex: '0 1 0',
  },
  likes: {
    fontWeight: 'bold',
    fontSize: '0.75em',
    marginBottom: '10px'
  },
  time: {
    fontSize: '0.625em',
    textTransform: 'uppercase',
    color: '#605C5C'
  }
}