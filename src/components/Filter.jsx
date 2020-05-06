import React from "react"
import { Input, Menu } from "semantic-ui-react"

const Filter = ({ activeItem, handleItemClick }) => {
  return (
    <Menu secondary>
      <Menu.Item
        name="all"
        active={activeItem === "all"}
        onClick={handleItemClick}
      >
        All
      </Menu.Item>

      <Menu.Item
        name="popular"
        active={activeItem === "popular"}
        onClick={handleItemClick}
      >
        Most popular
      </Menu.Item>

      <Menu.Item
        name="high"
        active={activeItem === "high"}
        onClick={handleItemClick}
      >
        Price: High to Low
      </Menu.Item>
      <Menu.Item
        name="low"
        active={activeItem === "low"}
        onClick={handleItemClick}
      >
        Price: Low to High
      </Menu.Item>
      <Menu.Item
        name="author"
        active={activeItem === "author"}
        onClick={handleItemClick}
      >
        Author
      </Menu.Item>
      <Menu.Item>
        <Input icon="search" placeholder="Search books..." />
      </Menu.Item>
    </Menu>
  )
}

export default Filter
