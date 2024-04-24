import { Link } from 'react-router-dom'
import { PencilSimple } from '@phosphor-icons/react'

import { Container, Content } from './styles'

export function Card({ img, title, description, price }) {
  return (
    <Container>
      <Content to="dish/5">
        <img src={img} alt="" />

        <h3>{title}</h3>
        <p>{description}</p>
        <span>{price}</span>

        <Link to="/edit/5">
          <PencilSimple />
        </Link>
      </Content>
    </Container>
  )
}
