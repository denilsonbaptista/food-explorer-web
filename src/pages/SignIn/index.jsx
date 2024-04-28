import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Header, Form, Wrapper } from './styles'

import logo from '../../assets/polygon.svg'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { singIn } = useAuth()

  function handleSignIn(event) {
    event.preventDefault()

    singIn({ email, password })
  }

  return (
    <Container>
      <div className="wrapper">
        <Header>
          <img src={logo} alt="logo" />
          <h1>food explorer</h1>
        </Header>

        <Form onSubmit={handleSignIn}>
          <h2>Faça login</h2>
          <Wrapper>
            <label>Email</label>
            <Input
              placeholder="Email"
              type="text"
              autoComplete="email"
              onChange={e => setEmail(e.target.value)}
            />
          </Wrapper>
          <Wrapper>
            <label>Senhas</label>
            <Input
              placeholder="Senha"
              type="password"
              autoComplete="password"
              onChange={e => setPassword(e.target.value)}
            />
          </Wrapper>

          <Button title="Entrar" type="submit" />

          <Link to="/register">Criar uma conta</Link>
        </Form>
      </div>
    </Container>
  )
}
