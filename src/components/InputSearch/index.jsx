import { MagnifyingGlass } from '@phosphor-icons/react'

import { Container } from './styles'

export function InputSearch({ ...rest }) {
  return (
    <Container>
      <MagnifyingGlass />

      <input {...rest} />
    </Container>
  )
}
