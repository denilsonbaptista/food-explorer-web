import logo from '../../assets/polygon.svg'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { List, SignOut, Receipt } from '@phosphor-icons/react'

import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

import { SideMenu } from '../SideMenu'
import { InputSearch } from '../InputSearch'
import {
  Container,
  Content,
  Search,
  Menu,
  NewDish,
  Logout,
  Orders,
} from './styles'

export function Header({ onChange }) {
  const { user, signOut } = useAuth()
  const navigation = useNavigate()

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleSignOut() {
    navigation('/')
    signOut()
  }

  function handleNewDish() {
    navigation('/new')
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        onChange={onChange}
      />

      <div className="wrapper">
        <Menu onClick={() => setMenuIsOpen(true)}>
          <List />
        </Menu>

        <Content to="/">
          <img src={logo} alt="Logo food explorer" />
          <h1>food explorer</h1>
          {[USER_ROLE.ADMIN].includes(user.role) && (
            <>
              <span>admin</span>
            </>
          )}
        </Content>

        {[USER_ROLE.CUSTOMER].includes(user.role) && (
          <Orders>
            <div>
              <span>01</span>
            </div>
            <Receipt />
          </Orders>
        )}

        <Search>
          <InputSearch
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            onChange={onChange}
          />
        </Search>

        {[USER_ROLE.ADMIN].includes(user.role) && (
          <NewDish onClick={handleNewDish}> Novo Prato</NewDish>
        )}

        {[USER_ROLE.CUSTOMER].includes(user.role) && (
          <NewDish>
            <Receipt />
            Pedidos (0)
          </NewDish>
        )}

        <Logout onClick={handleSignOut}>
          <SignOut />
        </Logout>
      </div>
    </Container>
  )
}
