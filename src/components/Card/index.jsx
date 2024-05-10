import { PencilSimple, Plus, Minus } from '@phosphor-icons/react'

import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

import {
  Container,
  Content,
  LinkToDish,
  Include,
  Count,
  Decrement,
  Increment,
} from './styles'

import { api } from '../../services/api'

import { Button } from '../Button'

export function Card({ data, ...rest }) {
  const { user } = useAuth()

  const imgaUrl = `${api.defaults.baseURL}/files/${data.image_url}`

  return (
    <Container>
      <Content type="button" {...rest}>
        <img src={imgaUrl} alt="" />

        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <span>R$ {data.price}</span>
      </Content>

      {[USER_ROLE.ADMIN].includes(user.role) && (
        <LinkToDish to={`/edit/${data.id}`}>
          <PencilSimple />
        </LinkToDish>
      )}

      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <Include>
          <Count>
            <Decrement>
              <Minus />
            </Decrement>
            <span>01</span>
            <Increment>
              <Plus />
            </Increment>
          </Count>

          <Button title="incluir" />
        </Include>
      )}
    </Container>
  )
}
