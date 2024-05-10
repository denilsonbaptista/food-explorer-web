import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;

  height: 100vh;

  div.wrapper a:first-child {
    display: flex;
    align-items: center;

    margin-top: 3.2rem;

    color: ${({ theme }) => theme.colors.light_300};

    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 5rem;

  > img {
    margin: 2rem 0;

    width: 32rem;
    height: 32rem;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: row;
    gap: 4.8rem;

    margin-top: 4.2rem;

    > img {
      margin: 0;

      width: 38rem;
      height: 38rem;
    }
  }
`

export const Descriptions = styled.div`
  color: ${({ theme }) => theme.colors.light_300};
  font-family: 'Poppins', sans-serif;
  text-align: center;

  width: min(32rem, 90%);

  > h2 {
    font-size: 2.7rem;
    font-weight: 500;
    line-height: 140%;
  }

  > p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;

    margin-top: 2.4rem;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    width: initial;
    text-align: start;

    > h2 {
      font-size: 4rem;
    }

    > p {
      font-size: 2rem;
    }

    > button {
      width: 14rem;
    }
  }
`

export const Ingredient = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;

  margin: 2.4rem 0 4.8rem;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    justify-content: flex-start;
  }
`

export const EditDish = styled(Link)`
  width: 100%;

  padding: 1.2rem 2.4rem;

  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;

  border: none;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.colors.light_100};
  background-color: ${({ theme }) => theme.colors.tints.tomato_100};
`

export const Include = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  margin-top: 1.5rem;

  max-width: 30rem;
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
