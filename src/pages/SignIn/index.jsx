import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Header, Form, Wrapper } from './styles'

import logo from '../../assets/polygon.svg'

export function SignIn() {
  return (
    <Container>
      <div className="wrapper">
        <Header>
          <img src={logo} alt="logo" />
          <h1>food explorer</h1>
        </Header>

        <Form>
          <h2>Faça login</h2>
          <Wrapper>
            <label>Email</label>
            <Input placeholder="Email" />
          </Wrapper>
          <Wrapper>
            <label>Senhas</label>
            <Input placeholder="Senha" />
          </Wrapper>

          <Button title="Entrar" />

          <a href="">Criar uma conta</a>
        </Form>
      </div>
    </Container>
  )
}
