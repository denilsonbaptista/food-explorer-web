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

  const navigate = useNavigate()

  function handleDish(id) {
    navigate(`/dish/${id}`)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/foods?title=${search}`)
      setData(response.data)
    }

    fetchData()
  }, [search])

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)} />

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
                        <Card data={food} onClick={() => handleDish(food.id)} />
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
