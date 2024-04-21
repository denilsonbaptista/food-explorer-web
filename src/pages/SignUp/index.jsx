import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Header, Form, Wrapper } from './styles'

import logo from '../../assets/polygon.svg'

export function SignUp() {
  return (
    <Container>
      <div className="wrapper">
        <Header>
          <img src={logo} alt="logo" />
          <h1>food explorer</h1>
        </Header>

        <Form>
          <h2>Crie sua conta</h2>
          <Wrapper>
            <label>Seu nome</label>
            <Input placeholder="Seu nome" />
          </Wrapper>
          <Wrapper>
            <label>Email</label>
            <Input placeholder="Email" />
          </Wrapper>
          <Wrapper>
            <label>Senhas</label>
            <Input placeholder="Senha" />
          </Wrapper>

          <Button title="Criar conta" />

          <a href="">Já tenho uma conta</a>
        </Form>
      </div>
    </Container>
  )
}
