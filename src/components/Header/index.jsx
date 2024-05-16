import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { List, SignOut } from '@phosphor-icons/react'

import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

import { CustomDialog } from '../CustomDialog/index.jsx'
import { SideMenu } from '../SideMenu'
import { InputSearch } from '../InputSearch'
import { Container, Content, Search, Menu, NewDish, Logout } from './styles.js'

export function Header({ orders, onChange, ondeleteOrder, onFinalizeOrders }) {
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
          {[USER_ROLE.ADMIN].includes(user.role) && <span>admin</span>}
        </Content>

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
          <CustomDialog
            title={`Pedidos`}
            orders={orders}
            ondeleteOrder={ondeleteOrder}
            onFinalizeOrders={onFinalizeOrders}
          />
        )}

        <Logout onClick={handleSignOut}>
          <SignOut />
        </Logout>
      </div>
    </Container>
  )
}
