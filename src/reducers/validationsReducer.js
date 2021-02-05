const initialProps = {

  errorFormAddTweet: false
}

export default function(state = initialProps, action) {

  switch (action.type) {
    
    case "VALIDATION_FORM_ADD_TWEET":
      
      return {
        ...state, // recuperar estado
        errorFormAddTweet: action.payload // payload valor que va a tomar nuevo estado
      };
  
    default:
      return state;
  }
}