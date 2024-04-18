import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  position: relative;

  .wrapper section:last-child {
    padding-bottom: 10rem;
  }

  .banner {
    margin: 1.6rem 0 6.2rem;
    width: 100%;
  }

  .footer {
    position: absolute;
    bottom: 0;

    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    .banner {
      margin: 3.8rem 0 4.8rem;
    }
  }
`
