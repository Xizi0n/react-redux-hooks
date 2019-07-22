const initialState = {
  value: 0,
  savedValues: [
    { id: 1, value: 17 },
    { id: 2, value: 23 },
    { id: 3, value: 46 },
    { id: 4, value: 72 },
    { id: 5, value: 61 },
    { id: 6, value: 5 },
    { id: 7, value: 90 },
    { id: 8, value: 86 },
    { id: 9, value: 33 },
    { id: 10, value: 0 }
  ]
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 10
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 10
      };
    case "RESET":
      return {
        ...state,
        value: 0
      };
    case "SAVE_VALUE":
      return {
        ...state,
        savedValues: state.savedValues.concat({
          id: actions.id,
          value: actions.value
        })
      };
    case "DELETE_VALUE":
      return {
        ...state,
        savedValues: state.savedValues.filter(item => item.id !== actions.id)
      };
    default:
      return state;
  }
};

export default reducer;
