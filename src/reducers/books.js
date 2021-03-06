const initialState = {
  items: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "BOOKS:SET_BOOKS":
      return {
        ...state,
        items: payload,
      }

    default:
      return state
  }
}
