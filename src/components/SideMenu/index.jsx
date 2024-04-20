import { X } from '@phosphor-icons/react'

import { useEffect } from 'react'

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

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  useEffect(() => {
    menuIsOpen
      ? document.querySelector('body').classList.add('menu-open')
      : document.querySelector('body').classList.remove('menu-open')
  }, [menuIsOpen])

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
        />
      </Search>

      <Buttons>
        <Button>Novo prato</Button>
        <Button>Sair</Button>
      </Buttons>
    </Container>
  )
}
