import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import "semantic-ui-css/semantic.min.css"

import store from "./store"
import "./index.css"
import { App } from "./containers/"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
