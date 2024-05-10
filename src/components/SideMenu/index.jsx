import { X } from '@phosphor-icons/react'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

import { InputSearch } from '../InputSearch'
import {
  Container,
  Header,
  ButtonClose,
  Title,
  Search,
  Buttons,
  Button,
} from './styles'

export function SideMenu({ menuIsOpen, onCloseMenu, onChange }) {
  const { user, signOut } = useAuth()

  const navigation = useNavigate()

  function handleNewDish() {
    navigation('/new')
  }

  function handleSignOut() {
    navigation('/')
    signOut()
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        {menuIsOpen && (
          <ButtonClose onClick={onCloseMenu}>
            <X />
          </ButtonClose>
        )}
        <Title>Menu</Title>
      </Header>

      <Search>
        <InputSearch
          type="text"
          placeholder="Busque por pratos ou ingredientes"
          onChange={onChange}
        />
      </Search>

      <Buttons>
        {[USER_ROLE.ADMIN].includes(user.role) && (
          <Button onClick={handleNewDish}>Novo prato</Button>
        )}
        <Button onClick={handleSignOut}>Sair</Button>
      </Buttons>
    </Container>
  )
}
