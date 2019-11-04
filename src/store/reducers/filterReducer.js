let initialState = {
    byType: '',
};

  const FilterReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_FILTER_BY_TYPE":
            state.byType = action.payload;
            return {...state}; 
        default: return state;
    }  
  };
  
  export default FilterReducer;
  