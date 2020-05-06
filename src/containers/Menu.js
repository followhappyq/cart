import React from "react"
import { connect } from "react-redux"
import uniqBy from "lodash/uniqBy"
import { bindActionCreators } from "redux"

import { Menu as BaseMenu } from "../components"
import { filterActions, cartActions } from "../actions/"

const Menu = ({ total, count, items, removeFromCart }) => {
  return (
    <BaseMenu
      total={total}
      count={count}
      items={items}
      removeFromCart={removeFromCart}
    ></BaseMenu>
  )
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(filterActions, dispatch),
  ...bindActionCreators(cartActions, dispatch),
})

export default connect(
  ({ cart }) => ({
    total: cart.items.reduce((total, book) => total + book.price, 0),
    count: cart.items.length,
    id: uniqBy(cart.items, (o) => o.id),
    items: uniqBy(cart.items, (o) => o.id),
  }),
  mapDispatchToProps
)(Menu)
