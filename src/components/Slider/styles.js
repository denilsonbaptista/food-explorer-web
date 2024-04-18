import styled from 'styled-components'

export const Container = styled.div`
  .swiper {
    padding: 1.2rem;
  }

  .swiper-container {
    position: relative;
  }
  .swiper-container > .swiper-slide__content {
    position: absolute;
    top: 0;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms linear;
    transform: scale(0.8);

    &.swiper-slide-active {
      transform: scale(1);
    }
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.light_100};

    z-index: 1;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    .swiper-button-prev::before {
      content: ' ';
      width: 22rem;
      height: 35rem;
      background: ${({ theme }) => theme.colors.gradients.linear_100_270deg};

      position: absolute;
    }

    .swiper-button-next::before {
      content: ' ';
      width: 22rem;
      height: 35rem;
      background: ${({ theme }) => theme.colors.gradients.linear_100_90deg};

      position: absolute;
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    .swiper-button-prev:after,
    .swiper-button-next:after {
      display: none;
    }
  }
`
