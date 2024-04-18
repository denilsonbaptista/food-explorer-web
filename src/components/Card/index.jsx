import { PencilSimple } from '@phosphor-icons/react'

import { Container, Content } from './styles'

export function Card({ img, title, description, price }) {
  return (
    <Container>
      <Content>
        <img src={img} alt="" />

        <h3>{title}</h3>
        <p>{description}</p>
        <span>{price}</span>

        <button>
          <PencilSimple size={32} color="#fcfcfc" />
        </button>
      </Content>
    </Container>
  )
}
