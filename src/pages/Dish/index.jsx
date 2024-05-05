import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CaretLeft } from '@phosphor-icons/react'

import { api } from '../../services/api'

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

export function Dish() {
  const [data, setData] = useState('')

  const params = useParams()

  const imgUrl = `${api.defaults.baseURL}/files/${data.image_url}`

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/foods/${params.id}`)
      setData(response.data)
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Header />

      <div className="wrapper">
        <Link to={-1}>
          <CaretLeft size={32} />
          voltar
        </Link>

        <Details>
          <img src={imgUrl} alt="" />

          <Descriptions>
            <h2>{data.name}</h2>
            <p>{data.description}</p>

            {data.ingredients && (
              <Ingredient>
                {data.ingredients.map(ingredient => (
                  <Tag title={ingredient.name} key={ingredient.id} />
                ))}
              </Ingredient>
            )}

            <EditDish to={`/edit/${params.id}`}>Editar prato</EditDish>
          </Descriptions>
        </Details>
      </div>

      <Footer />
    </Container>
  )
}
