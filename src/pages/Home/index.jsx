import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { Container } from './styles'

import { Slider, Slide } from '../../components/Slider'

import { api } from '../../services/api'

import banner from '../../assets/banner.png'

export function Home() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [orders, setOrders] = useState([])

  const navigate = useNavigate()

  function handleDish(id) {
    navigate(`/dish/${id}`)
  }

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

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/foods?title=${search}`)
      setData(response.data)
    }

    fetchData()
  }, [search])

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders'))
    if (storedOrders) {
      setOrders(storedOrders)
    }
  }, [])

  return (
    <Container>
      <Header orders={orders} onChange={e => setSearch(e.target.value)} />

      <div className="wrapper">
        <img src={banner} alt="" className="banner" />

        {data &&
          data.map(
            section =>
              section.foods.length > 0 && (
                <Section key={section.id} title={section.name}>
                  <Slider
                    settings={{
                      spaceBetween: 1,
                      centeredSlides: true,
                      roundLengths: true,
                      loopAdditionalSlides: 30,
                      navigation: true,
                      breakpoints: {
                        640: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                        1280: {
                          slidesPerView: 4,
                        },
                      },
                    }}
                  >
                    {section.foods.map(food => (
                      <Slide key={food.id}>
                        <Card
                          data={food}
                          onClick={() => handleDish(food.id)}
                          onAddToOrder={addToOrder}
                        />
                      </Slide>
                    ))}
                  </Slider>
                </Section>
              ),
          )}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </Container>
  )
}
