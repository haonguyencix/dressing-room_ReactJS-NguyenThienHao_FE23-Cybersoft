let initialState = {
    topclothes: '',
    botclothes: '',
    shoes: '',
    handbags: '',
    necklaces: ''
};

  const ModelReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_ACCESSORIES":
        return {...state, [action.payload.type]: action.payload.accessories}
        default: return state;
    }
  };
  
  export default ModelReducer;
  