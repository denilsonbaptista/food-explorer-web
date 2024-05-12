import { useState } from 'react'
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

export function Card({ data, onAddToOrder, ...rest }) {
  const { user } = useAuth()
  const [count, setCount] = useState(0)

  const imgaUrl = `${api.defaults.baseURL}/files/${data.image_url}`

  function incrementDish() {
    const increment = count + 1

    setCount(increment)
  }

  function decrementDish() {
    const decrement = count - 1

    if (decrement < 0) {
      return
    }

    setCount(decrement)
  }

  function handleAddToOrder() {
    onAddToOrder(data, count)
    setCount(0)
  }

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
            <Decrement onClick={decrementDish}>
              <Minus />
            </Decrement>
            <span>{count}</span>
            <Increment onClick={incrementDish}>
              <Plus />
            </Increment>
          </Count>

          <Button title="incluir" onClick={handleAddToOrder} />
        </Include>
      )}
    </Container>
  )
}
