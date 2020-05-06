import React from "react"
import { Container, Card } from "semantic-ui-react"

import { Menu, Card as BaseCard } from "../containers"
import "../styles/app.scss"

const App = ({ books }) => {
  return (
    <Container>
      <Menu />
      <Card.Group itemsPerRow={4}>
        {books &&
          books.map((book) => (
            <BaseCard key={Math.random()} book={book}></BaseCard>
          ))}
      </Card.Group>
    </Container>
  )
}

export default App
