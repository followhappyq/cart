import React from "react"
import { Menu } from "semantic-ui-react"

import { Filter } from "../containers"

const BaseMenu = ({ activeItem }) => {
  return (
    <Menu>
      <Menu.Item name="browse" active={activeItem === "browse"}>
        Shop
      </Menu.Item>
      <Filter />

      <Menu.Menu position="right">
        <Menu.Item name="signup" active={activeItem === "signup"}>
          Total: <b>$</b>
        </Menu.Item>

        <Menu.Item name="help" active={activeItem === "help"}>
          Cart
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default BaseMenu
