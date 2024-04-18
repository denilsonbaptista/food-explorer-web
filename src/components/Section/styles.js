import styled from 'styled-components'

export const Container = styled.section`
  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.colors.light_300};
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    h2 {
      font-size: 3.2rem;
    }
  }
`
