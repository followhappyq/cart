import React from "react"
import { List, Button, Image } from "semantic-ui-react"

const CartPopup = ({ book, removeFromCart }) => {
  return (
    <List selection divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <Button
            onClick={() => {
              removeFromCart(book.id)
            }}
            color="red"
          >
            X
          </Button>
        </List.Content>
        <Image avatar src={book.image} />
        <List.Content>{book.title}</List.Content>
      </List.Item>
    </List>
  )
}

export default CartPopup
