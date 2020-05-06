import { combineReducers } from "redux"

const reducers = ["books", "filter", "cart"]

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default
    return initial
  }, {})
)
