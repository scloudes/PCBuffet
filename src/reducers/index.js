const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload.category,
        questions: action.payload.questions,
      };
    default:
      return state;
  }
};

export default reducer;
