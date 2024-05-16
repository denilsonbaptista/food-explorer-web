import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Header, Form, Wrapper } from './styles'

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
          <svg
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Polygon 1"
              d="M10.6935 0.5L21.3513 6.65327V18.9598L10.6935 25.1131L0.0357265 18.9598V6.65327L10.6935 0.5Z"
              fill="#065E7C"
            />
          </svg>

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
