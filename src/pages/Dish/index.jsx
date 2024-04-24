import { Link } from 'react-router-dom'
import { CaretLeft } from '@phosphor-icons/react'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import {
  Container,
  Details,
  Descriptions,
  Ingredient,
  EditDish,
} from './styles'

import salad from '../../assets/salad.png'

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
          <img src={salad} alt="" />

          <Descriptions>
            <h2>Salada Ravanello</h2>

            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>

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
