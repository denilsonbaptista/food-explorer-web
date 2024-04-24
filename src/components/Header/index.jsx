import logo from '../../assets/polygon.svg'

import { useState } from 'react'

import { List, SignOut } from '@phosphor-icons/react'

import { SideMenu } from '../SideMenu'
import { InputSearch } from '../InputSearch'
import { Container, Content, Search, Menu, NewDish, Logout } from './styles'

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <div className="wrapper">
        <Menu onClick={() => setMenuIsOpen(true)}>
          <List />
        </Menu>

        <Content to="/">
          <img src={logo} alt="Logo food explorer" />
          <h1>food explorer</h1>
          <span>admin</span>
        </Content>

        <Search>
          <InputSearch
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
        </Search>

        <NewDish to="/new"> Novo Prato</NewDish>

        <Logout>
          <SignOut />
        </Logout>
      </div>
    </Container>
  )
}
