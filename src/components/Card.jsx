import React from "react"
import { Card, Image, Rating } from "semantic-ui-react"

const BaseCard = ({ book }) => {
  return (
    <Card key={Math.random()}>
      <Image src={book.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{book.title}</Card.Header>
        <Card.Meta>
          <span className="author">{book.author}</span>
        </Card.Meta>
        <Card.Description>{`Price: $${book.price}`}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating defaultRating={book.rating} maxRating={5} disabled />
      </Card.Content>
    </Card>
  )
}

export default BaseCard
