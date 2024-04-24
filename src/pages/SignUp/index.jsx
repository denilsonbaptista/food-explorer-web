import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Header, Form, Wrapper } from './styles'

import logo from '../../assets/polygon.svg'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSingUp(event) {
    event.preventDefault()

    if (!name || !email || !password) {
      alert('Preencha todos os campos')
      return
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Cadastro realizado com sucesso!')
        navigate(-1)
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível realizar o cadastro')
        }
      })
  }

  return (
    <Container>
      <div className="wrapper">
        <Header>
          <img src={logo} alt="logo" />
          <h1>food explorer</h1>
        </Header>

        <Form onSubmit={handleSingUp}>
          <h2>Crie sua conta</h2>
          <Wrapper>
            <label>Seu nome</label>
            <Input
              placeholder="Seu nome"
              type="text"
              onChange={e => setName(e.target.value)}
            />
          </Wrapper>
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

          <Button title="Criar conta" type="submit" />

          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </div>
    </Container>
  )
}
