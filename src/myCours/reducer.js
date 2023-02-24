const initialState = {
    cours: {},
    loading: true,
    error: ''
  }
  
  const Reducer = (state, action) => {
    switch (action.type) {
      case 'OnSuccess':
        return {
          loading: false,
          cours: action.payload,
          error: ''
        }
      case 'OnFailure':
        return {
          loading: false,
          cours: {},
          error: 'error'
        }
  
      default:
        return state
    }
  }