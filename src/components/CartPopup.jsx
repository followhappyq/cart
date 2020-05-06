import React from "react"
import { List, Button, Image } from "semantic-ui-react"

const CartPopup = ({ book, removeFromCart }) => {
  return (
    <List selection verticalAlign="middle">
      <List.Item>
        <Image avatar src={book.image} />
        <List.Content>
          <List.Header>
            {book.title}{" "}
            <Button
              onClick={() => {
                removeFromCart(book.id)
              }}
              color="red"
            >
              X
            </Button>
          </List.Header>
        </List.Content>
      </List.Item>
    </List>
  )
}

export default CartPopup
