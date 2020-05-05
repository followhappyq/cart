const initialState = {
  books: [{ id: "1", title: "abc" }],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "BOOKS:ADD_BOOKS":
      return {
        ...state,
        books: payload,
      }
    case "BOOKS:SET_BOOKS":
      return {
        ...state,
        books: payload,
      }

    default:
      return state
  }
}
