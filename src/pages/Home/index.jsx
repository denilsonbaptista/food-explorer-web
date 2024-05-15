import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { Slider, Slide } from '../../components/Slider'

import { Container } from './styles'

import { api } from '../../services/api'

import banner from '../../assets/banner.png'

export function Home() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [orders, setOrders] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [search])

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders'))
    if (storedOrders) {
      setOrders(storedOrders)
    }
  }, [])

  function handleDish(id) {
    navigate(`/dish/${id}`)
  }

  async function fetchData() {
    const response = await api.get(`/foods?title=${search}`)
    setData(response.data)
  }

  function addToOrder(item, quantity) {
    const existingItemIndex = orders.findIndex(order => order.id === item.id)

    if (existingItemIndex !== -1) {
      const updatedOrders = [...orders]
      updatedOrders[existingItemIndex].quantity += quantity
      setOrders(updatedOrders)

      localStorage.setItem('orders', JSON.stringify(updatedOrders))
    } else {
      setOrders(prevOrders => [...prevOrders, { ...item, quantity }])

      localStorage.setItem(
        'orders',
        JSON.stringify([...orders, { ...item, quantity }]),
      )
    }
  }

  function deleteOrder(id) {
    const newOrders = orders.filter(order => order.id !== id)

    setOrders(newOrders)

    localStorage.setItem('orders', JSON.stringify(newOrders))
  }

  function handleFinalizeOrders() {
    setOrders([])

    localStorage.removeItem('orders')
    alert('Pedido recebido com sucesso! Obrigado! Logo chegará em sua mesa!')
  }

  return (
    <Container>
      <Header
        orders={orders}
        onChange={e => setSearch(e.target.value)}
        ondeleteOrder={deleteOrder}
        onFinalizeOrders={handleFinalizeOrders}
      />
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
