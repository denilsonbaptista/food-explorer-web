import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { Container } from './styles'

import { Slider, Slide } from '../../components/Slider'

import banner from '../../assets/banner.png'
import salad from '../../assets/salad.png'
import drink from '../../assets/drink.png'
import desserts from '../../assets/desserts.png'

export function Home() {
  return (
    <Container>
      <Header />

      <div className="wrapper">
        <img src={banner} alt="" className="banner" />

        <Section title="Refeição">
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
            <Slide>
              <Card
                img={salad}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
            <Slide>
              <Card
                img={salad}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
            <Slide>
              <Card
                img={salad}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
            <Slide>
              <Card
                img={salad}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
          </Slider>
        </Section>
        <Section title="Sobremesas">
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
            <Slide>
              <Card
                img={desserts}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
            <Slide>
              <Card
                img={desserts}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
            <Slide>
              <Card
                img={desserts}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
            <Slide>
              <Card
                img={desserts}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
            <Slide>
              <Card
                img={desserts}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
          </Slider>
        </Section>
        <Section title="Bebidas">
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
            <Slide>
              <Card
                img={drink}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
            <Slide>
              <Card
                img={drink}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
            <Slide>
              <Card
                img={drink}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
            <Slide>
              <Card
                img={drink}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
            <Slide>
              <Card
                img={drink}
                title="Salada Ravanello"
                description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."
                price="R$: 79,00"
              />
            </Slide>
          </Slider>
        </Section>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </Container>
  )
}
