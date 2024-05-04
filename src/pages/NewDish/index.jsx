import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaretLeft, UploadSimple } from '@phosphor-icons/react'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'
import { IngredientItem } from '../../components/IngredientItem'
import { Footer } from '../../components/Footer'
import { Form, Container, Content, Wrapper, File, Select, Items, Price, Buttons, RowOne, RowTwo } from './styles'

export function NewDish() {
  const [image, setImage] = useState(null)

  const [dishName, setDishName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(item => item !== deleted))
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function priceChange(e) {
    const value = e.target.value.replace(',', '.')
    const converted = parseFloat(value).toFixed(2).toString().replace('.', ',')

    setPrice(converted)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (!image) {
      return alert('Selecione uma imagem para o prato')
    }

    if (!dishName || !selectedCategory || ingredients.length === 0 || !price || !description) {
      return alert('Preencha todos os campos')
    }

    if (newIngredient) {
      return alert(
        'Você deixou uma tag no campo adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.',
      )
    }

    try {
      const formData = new FormData()
      formData.append('image', image)

      const response = await api.patch('foods/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      const { image_url } = response.data

      await api.post('foods', {
        name: dishName,
        categories: selectedCategory,
        ingredients,
        price,
        description,
        image_url,
      })

      alert('Prato cadastrado com sucesso!')
      navigate(-1)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar o prato')
      }
    }
  }

  return (
    <Container>
      <Header />

      <div className="wrapper">
        <Link to={-1}>
          <CaretLeft size={24} />
          Voltar
        </Link>

        <Form onSubmit={handleSubmit}>
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
                    <Input id="file-dish" type="file" onChange={e => setImage(e.target.files[0])} />
                  </File>
                </Wrapper>

                <Wrapper>
                  <label htmlFor="name-dish">Nome</label>
                  <Input
                    id="name-dish"
                    type="text"
                    placeholder="Ex.: Salada Ceasar"
                    onChange={e => setDishName(e.target.value)}
                  />
                </Wrapper>

                <Wrapper>
                  <label htmlFor="category">Categoria</label>
                  <Select id="category" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="Refeições">Refeições</option>
                    <option value="Sobremesas">Sobremesas</option>
                    <option value="Bebidas">Bebidas</option>
                  </Select>
                </Wrapper>
              </RowOne>

              <RowTwo>
                <Wrapper>
                  <label>Ingredientes</label>
                  <Items>
                    {ingredients.map((ingredient, index) => (
                      <IngredientItem
                        key={String(index)}
                        values={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))}

                    <IngredientItem
                      isNew
                      placeholder="Adicionar"
                      onChange={e => setNewIngredient(e.target.value)}
                      onClick={handleAddIngredient}
                    />
                  </Items>
                </Wrapper>

                <Wrapper>
                  <label htmlFor="price">Preço</label>
                  <Price>
                    <span>R$</span>
                    <input id="price" type="text" placeholder="00,00" onChange={priceChange} />
                  </Price>
                </Wrapper>
              </RowTwo>

              <Wrapper>
                <label htmlFor="price">Descrição</label>
                <Textarea
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  onChange={e => setDescription(e.target.value)}
                />
              </Wrapper>

              <Buttons>
                <Button title="Salvar alterações" type="submit" />
              </Buttons>
            </Content>
          </fieldset>
        </Form>
      </div>

      <Footer />
    </Container>
  )
}
