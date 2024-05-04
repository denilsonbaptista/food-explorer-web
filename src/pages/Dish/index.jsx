import { Link } from 'react-router-dom'
import { CaretLeft } from '@phosphor-icons/react'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import { Container, Details, Descriptions, Ingredient, EditDish } from './styles'

export function Dish() {
  return (
    <Container>
      <Header />

      <div className="wrapper">
        <Link to={-1}>
          <CaretLeft size={32} />
          voltar
        </Link>

        <Details>
          <img src="http://localhost:3333/files/e26d12370cc18d86bb34-image%203.png" alt="" />

          <Descriptions>
            <h2>Salada Ravanello</h2>

            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

            <Ingredient>
              <Tag title="alface" />
              <Tag title="cebole" />
              <Tag title="pão naan" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </Ingredient>

            <EditDish to="/edit/5">Editar prato</EditDish>
          </Descriptions>
        </Details>
      </div>

      <Footer />
    </Container>
  )
}
