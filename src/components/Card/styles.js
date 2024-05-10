import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  padding: 2.4rem;
  width: 30rem;

  position: relative;
`

export const Content = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  text-align: center;

  background: transparent;
  border: none;

  img {
    width: 17.6rem;
    height: 17.6rem;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.light_300};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.light_400};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.tints.cake_200};
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    h3 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.4rem;
    }

    span {
      font-size: 3.2rem;
    }
  }
`

export const LinkToDish = styled(Link)`
  background: none;
  border: none;

  position: absolute;
  top: -1.5rem;
  right: -1rem;

  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.light_100};
`

export const Include = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  margin-top: 1.5rem;
`

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  font-family: 'Roboto', sans-serif;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;

  color: ${({ theme }) => theme.colors.light_100};
`

export const Decrement = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.light_100};
`

export const Increment = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.light_100};
`
