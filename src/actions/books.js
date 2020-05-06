const actions = {
  setBooks: (books) => ({
    type: "BOOKS:SET_BOOKS",
    payload: books,
  }),
  setFilter: (filter) => ({
    type: "BOOKS:SET_FILTER",
    payload: filter,
  }),
}

export default actions
