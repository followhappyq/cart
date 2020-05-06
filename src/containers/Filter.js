import React, { useState } from "react"
import { connect } from "react-redux"
import { filterActions } from "../actions/"

import { Filter as BaseFilter } from "../components"

const Filter = ({ setFilter, filterBy, query, setQuery }) => {
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
      query={query}
      setQuery={setQuery}
    />
  )
}

export default connect(
  ({ books, filter }) => ({ filterBy: filter.filterBy }),
  filterActions
)(Filter)
