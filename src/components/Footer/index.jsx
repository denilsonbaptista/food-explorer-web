import logoGray from '../../assets/polygon-gray.png'

import { Container, Logotype } from './styles'

export function Footer() {
  return (
    <Container>
      <div className="wrapper">
        <Logotype>
          <img src={logoGray} alt="Logo Food Explorer" />
          <p>food explorer</p>
        </Logotype>
        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  )
}
