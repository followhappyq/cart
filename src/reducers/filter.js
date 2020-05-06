const initialState = {
  query: "",
  filterBy: "all",
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FILTER:SET_QUERY":
      return {
        ...state,
        query: payload,
      }
    case "FILTER:SET_FILTER":
      return {
        ...state,
        filterBy: payload,
      }

    default:
      return state
  }
}
