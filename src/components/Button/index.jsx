import { Container } from './styles'

export function Button({ title, isDelete = false, ...rest }) {
  return (
    <Container type="button" $isDelete={isDelete} {...rest}>
      {title}
    </Container>
  )
}
