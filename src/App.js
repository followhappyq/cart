import React from "react"
import { connect } from "react-redux"
import { setBooks } from "./actions/books"

const App = (props) => {
  return <div>{console.log(props.books.books[0].title)}</div>
}

const mapDispatchToProps = (dispatch) => ({
  setBooks: (books) => dispatch(books),
})

export default connect((state) => ({ ...state }), mapDispatchToProps)(App)
