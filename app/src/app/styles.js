export default {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    maxHeight: '750px',
    height: '100vh',
    margin: '0px auto',
    width: 'calc(100% - 40px)',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  },

  image: {
    order: '1',
    flex: '1 0 60%',
    alignSelf: 'stretch',
    boxSizing: 'border-box',
    backgroundColor: '#fafafa',
    display: 'flex'
  },

  text: {
    order: '2',
    flex: '1 0 40%',
    alignSelf: 'stretch',
    boxSizing: 'border-box',
    padding: '20px 0px 0px 20px',
    display: 'flex',
    flexFlow: 'column'
  }
}
