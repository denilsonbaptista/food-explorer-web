import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CaretLeft, Minus, Plus } from '@phosphor-icons/react'

import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import {
  Container,
  Details,
  Descriptions,
  Ingredient,
  EditDish,
  Include,
  Count,
  Decrement,
  Increment,
} from './styles'

export function Dish() {
  const { user } = useAuth()

  const [data, setData] = useState('')
  const [count, setCount] = useState(0)
  const [orders, setOrders] = useState([])

  const params = useParams()

  const imgUrl = `${api.defaults.baseURL}/files/${data.image_url}`

  function addToOrder(item, quantity) {
    // Verifique se o item já está no pedido
    const existingItemIndex = orders.findIndex(order => order.id === item.id)

    if (existingItemIndex !== -1) {
      // Se o item já existe, atualize a quantidade
      const updatedOrders = [...orders]
      updatedOrders[existingItemIndex].quantity += quantity
      setOrders(updatedOrders)
      localStorage.setItem('orders', JSON.stringify(updatedOrders))
    } else {
      // Se o item ainda não estiver no pedido, adicione-o
      setOrders(prevOrders => [...prevOrders, { ...item, quantity }])
      localStorage.setItem(
        'orders',
        JSON.stringify([...orders, { ...item, quantity }]),
      )
    }
  }

  function incrementDish() {
    const increment = count + 1

    setCount(increment)
  }

  function decrementDish() {
    const decrement = count - 1

    if (decrement < 0) {
      return
    }

    setCount(decrement)
  }

  function handleAddToOrder() {
    addToOrder(data, count)
    setCount(0)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/foods/${params.id}`)
      setData(response.data)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders'))
    if (storedOrders) {
      setOrders(storedOrders)
    }
  }, [])

  return (
    <Container>
      <Header orders={orders} />

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

            {[USER_ROLE.ADMIN].includes(user.role) && (
              <EditDish to={`/edit/${params.id}`}>Editar prato</EditDish>
            )}

            {[USER_ROLE.CUSTOMER].includes(user.role) && (
              <Include>
                <Count>
                  <Decrement onClick={decrementDish}>
                    <Minus />
                  </Decrement>
                  <span>{count}</span>
                  <Increment onClick={incrementDish}>
                    <Plus />
                  </Increment>
                </Count>

                <Button title="incluir" onClick={handleAddToOrder} />
              </Include>
            )}
          </Descriptions>
        </Details>
      </div>

      <Footer />
    </Container>
  )
}
