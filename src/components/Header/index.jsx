import logo from '../../assets/polygon.svg'

import { List, MagnifyingGlass, SignOut } from '@phosphor-icons/react'

import { Container, Content, Menu, Search, Button, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <div className="wrapper">
        <Menu>
          <List size={24} color="#FFFFFF" />
        </Menu>

        <Content>
          <img src={logo} alt="Logo food explorer" />
          <h1>food explorer</h1>
          <span>admin</span>
        </Content>

        <Search>
          <MagnifyingGlass size={24} color="#C4C4CC" />

          <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </Search>

        <Button>Novo Prato</Button>

        <Logout>
          <SignOut size={32} color="#FFFFFF" />
        </Logout>
      </div>
    </Container>
  )
}
