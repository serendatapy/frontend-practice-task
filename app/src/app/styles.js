export default {
  main: (isMobile) => ({
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    boxSizing: 'border-box',
    maxWidth: '935px',
    maxHeight: isMobile ? '': '450px',
    height: '100vh',
    margin: '0px auto',
    width: isMobile ? '': 'calc(100% - 40px)',
    fontSize: isMobile ? '20px': '16px',

    display: 'flex',
    flexFlow: isMobile ? 'column':'row wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  }),

  image: (isMobile) => ({
    order: '1',
    flex: isMobile ? '':'1 0 60%',
    alignSelf: 'stretch',
    boxSizing: 'border-box',
    backgroundColor: '#fafafa',
    display: 'flex'
  }),

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
