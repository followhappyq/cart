import React, { useEffect } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { orderBy } from "lodash"

import { App as BaseApp } from "../components"
import { booksActions } from "../actions/"

//orderBy(books, "price", "ASC")

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case "all":
      return books
    case "high":
      return orderBy(books, "price", "desc")
    case "low":
      return orderBy(books, "price", "asc")
    case "author":
      return orderBy(books, "author", "asc")
    case "popular":
      return orderBy(books, "rating", "desc")
    default:
      return books
  }
}

const filterBooks = (books, query) =>
  books.filter(
    (book) =>
      book.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
      book.author.toLowerCase().indexOf(query.toLowerCase()) >= 0
  )

const searchBooks = (books, filterBy, query) => {
  return sortBy(filterBooks(books, query), filterBy)
}

const App = ({ setBooks, books, setFilter }) => {
  useEffect(() => {
    axios
      .get("/db.json")
      .then(({ data }) => {
        setBooks(data)
      })
      .catch(() => {
        console.log("error")
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <BaseApp books={books} />
}

export default connect(
  ({ books, filter }) => ({
    books:
      books.items && searchBooks(books.items, filter.filterBy, filter.query),
  }),
  booksActions
)(App)
