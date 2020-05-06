import React from "react"
import { connect } from "react-redux"
import { cartActions } from "../actions/"

import { Card as BaseCard } from "../components"

const Card = ({ book, addToCart, addedCount }) => {
  const onAddToCart = () => {
    addToCart(book)
  }

  return (
    <BaseCard
      book={book}
      onAddToCart={onAddToCart}
      addedCount={addedCount}
    ></BaseCard>
  )
}

export default connect(
  ({ cart }, { book }) => ({
    addedCount: cart.items.reduce(
      (count, item) => count + (item.id === book.id ? 1 : 0),
      0
    ),
  }),
  cartActions
)(Card)
