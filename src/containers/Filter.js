import React, { useState } from "react"
import { connect } from "react-redux"
import { booksActions } from "../actions/"

import { Filter as BaseFilter } from "../components"

const Filter = ({ setFilter, filterBy }) => {
  const [activeItem, setActiveItem] = useState("all")

  const handleItemClick = (e, { name }) => {
    setActiveItem(name)
    setFilter(name)
  }
  return (
    <BaseFilter
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      setFilter={setFilter}
      handleItemClick={handleItemClick}
    />
  )
}

export default connect(
  ({ books }) => ({ filterBy: books.filterBy }),
  booksActions
)(Filter)
