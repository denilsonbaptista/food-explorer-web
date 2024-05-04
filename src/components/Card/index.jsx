import { PencilSimple } from '@phosphor-icons/react'

import { Container, Content, LinkToDish } from './styles'

import { api } from '../../services/api'

export function Card({ data, ...rest }) {
  const imgaUrl = `${api.defaults.baseURL}/files/${data.image_url}`

  return (
    <Container>
      <Content type="button" {...rest}>
        <img src={imgaUrl} alt="" />

        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <span>R$ {data.price}</span>
      </Content>

      <LinkToDish to={`/edit/${data.id}`}>
        <PencilSimple />
      </LinkToDish>
    </Container>
  )
}
