import { Link } from 'react-router-dom'
import { CaretLeft, UploadSimple } from '@phosphor-icons/react'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'
import { IngredientItem } from '../../components/IngredientItem'
import { Footer } from '../../components/Footer'
import {
  Form,
  Container,
  Content,
  Wrapper,
  File,
  Select,
  Items,
  Price,
  Buttons,
  RowOne,
  RowTwo,
} from './styles'

export function NewDish() {
  return (
    <Container>
      <Header />

      <div className="wrapper">
        <Link to={-1}>
          <CaretLeft size={24} />
          Voltar
        </Link>

        <Form>
          <fieldset>
            <legend>Novo prato</legend>

            <Content>
              <RowOne>
                <Wrapper>
                  <label htmlFor="file-dish">Imagem do prato</label>

                  <File>
                    <label htmlFor="file-dish">
                      <UploadSimple size={24} weight="bold" />
                      Selecione imagem
                    </label>
                    <Input id="file-dish" type="file" />
                  </File>
                </Wrapper>

                <Wrapper>
                  <label htmlFor="name-dish">Nome</label>
                  <Input
                    id="name-dish"
                    type="text"
                    placeholder="Ex.: Salada Ceasar"
                  />
                </Wrapper>

                <Wrapper>
                  <label htmlFor="category">Categoria</label>
                  <Select id="category">
                    <option value="meal">Refeição</option>
                    <option value="desserts">Sobremesas</option>
                    <option value="drinks">Bebidas</option>
                  </Select>
                </Wrapper>
              </RowOne>

              <RowTwo>
                <Wrapper>
                  <label>Ingredientes</label>
                  <Items>
                    <IngredientItem key={1} values={'Pão Naan'} />
                    <IngredientItem isNew placeholder="Adicionar" />
                  </Items>
                </Wrapper>

                <Wrapper>
                  <label htmlFor="price">Preço</label>
                  <Price>
                    <span>R$</span>
                    <input id="price" type="number" placeholder="00,00" />
                  </Price>
                </Wrapper>
              </RowTwo>

              <Wrapper>
                <label htmlFor="price">Descrição</label>
                <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
              </Wrapper>

              <Buttons>
                <Button title="Salvar alterações" />
              </Buttons>
            </Content>
          </fieldset>
        </Form>
      </div>

      <Footer />
    </Container>
  )
}
