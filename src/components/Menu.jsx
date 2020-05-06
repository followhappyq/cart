import React, { Fragment } from "react"
import { Menu, Button, Popup } from "semantic-ui-react"

import { Filter } from "../containers"
import { CartPopup } from "./"

const BaseMenu = ({ count, total, items, removeFromCart }) => {
  return (
    <Fragment>
      {console.log(removeFromCart)}
      <Menu>
        <Menu.Item link>Shop</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item link>
            Total: <b>${total}</b>
          </Menu.Item>

          <Menu.Item>
            <Popup trigger={<Button>Cart ({count})</Button>} flowing hoverable>
              {items.map((book) => (
                <CartPopup
                  key={Math.random()}
                  book={book}
                  removeFromCart={removeFromCart}
                />
              ))}
            </Popup>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Filter />
    </Fragment>
  )
}

export default BaseMenu
