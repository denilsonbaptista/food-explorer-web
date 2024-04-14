import { CaretLeft } from '@phosphor-icons/react'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { Container, Details, Descriptions, Ingredient } from './styles'

import salad from '../../assets/salad.png'

export function Dish() {
  return (
    <Container>
      <Header />

      <div className="wrapper">
        <a href="/">
          <CaretLeft size={32} color="#fcfcfc" />
          voltar
        </a>

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

            <Button title="Editar prato" />
          </Descriptions>
        </Details>
      </div>

      <Footer />
    </Container>
  )
}
