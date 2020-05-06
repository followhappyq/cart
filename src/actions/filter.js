const actions = {
  setQuery: (query) => ({
    type: "FILTER:SET_QUERY",
    payload: query,
  }),
  setFilter: (filter) => ({
    type: "FILTER:SET_FILTER",
    payload: filter,
  }),
}

export default actions
