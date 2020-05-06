const initialState = {
  items: null,
  filterBy: "all",
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "BOOKS:SET_BOOKS":
      return {
        ...state,
        items: payload,
      }
    case "BOOKS:SET_FILTER":
      return {
        ...state,
        filterBy: payload,
      }

    default:
      return state
  }
}
