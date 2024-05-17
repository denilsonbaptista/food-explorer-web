import { useState, useEffect } from 'react'
import { CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { api } from '../../services/api'

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

export function EditDish() {
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')

  const [name, setName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()
  const params = useParams()

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(item => item !== deleted))
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function priceChange(value) {
    const valueConverted = value.replace(',', '.')
    const converted = parseFloat(valueConverted)
      .toFixed(2)
      .toString()
      .replace('.', ',')

    setPrice(converted)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (!name || ingredients.length === 0 || !price || !description) {
      return alert('Preencha todos os campos')
    }

    if (newIngredient) {
      return alert(
        'Você deixou uma tag no campo adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.',
      )
    }

    try {
      let image_url

      if (typeof image === 'object') {
        const formData = new FormData()
        formData.append('image', image)

        const response = await api.patch(`foods/image/${params.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        image_url = response.data.image_url
      }

      await api.put(`/foods/${params.id}`, {
        name,
        price,
        description,
        categories: selectedCategory,
        image_url,
        ingredients,
      })

      alert('Prato atualizado com sucesso!')
      navigate(-1)
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Não foi possível editar o prato')
      }
    }
  }

  function handleDeleteDish() {
    api.delete(`foods/${params.id}`)
    navigate('/')
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`foods/${params.id}`)

      setName(response.data.name)
      setPrice(response.data.price)
      setDescription(response.data.description)
      setSelectedCategory(response.data.categories.name)
      setImage(response.data.image_url)

      const ingredientNames = response.data.ingredients.map(
        ingredient => ingredient.name,
      )
      setIngredients(ingredientNames)
    }

    fetchData()
  }, [params.id])

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
            <legend>Editar prato</legend>

            <Content>
              <RowOne>
                <Wrapper>
                  <label htmlFor="file-dish">Imagem do prato</label>

                  <File>
                    <label htmlFor="file-dish">
                      <UploadSimple size={24} weight="bold" />
                      <p>
                        {image && typeof image === 'object' && image.name
                          ? image.name
                          : image}{' '}
                      </p>
                    </label>
                    <Input
                      id="file-dish"
                      type="file"
                      onChange={e => setImage(e.target.files[0])}
                    />
                  </File>
                </Wrapper>

                <Wrapper>
                  <label htmlFor="name-dish">Nome</label>
                  <Input
                    id="name-dish"
                    type="text"
                    placeholder="Ex.: Salada Ceasar"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </Wrapper>

                <Wrapper>
                  <label htmlFor="category">Categoria</label>
                  <Select
                    id="category"
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                  >
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
                    <input
                      id="price"
                      type="text"
                      placeholder="00,00"
                      defaultValue={price}
                      onInput={e => priceChange(e.target.value)}
                    />
                  </Price>
                </Wrapper>
              </RowTwo>

              <Wrapper>
                <label htmlFor="description">Descrição</label>
                <Textarea
                  id="description"
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  defaultValue={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </Wrapper>

              <Buttons>
                <Button
                  title="Excluir prato"
                  isDelete
                  onClick={handleDeleteDish}
                />
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
