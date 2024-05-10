import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  align-items: center;

  padding: 5.6rem 0 2.4rem 0;

  background-color: ${({ theme }) => theme.colors.dark_700};

  div.wrapper {
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    align-items: center;
  }

  &[data-menu-is-open='true'] {
    display: initial;
    padding: 0;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    padding: 2.4rem 0;

    div.wrapper {
      grid-template-columns: max-content 1fr 20rem max-content;
      gap: 3.2rem;
    }

    &[data-menu-is-open='true'] {
      display: flex;
      padding: 2.4rem 0;
    }
  }
`

export const Content = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  img {
    width: 2.4rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.light_100};
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  span {
    color: ${({ theme }) => theme.colors.tints.cake_200};
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    gap: initial;

    display: grid;
    grid-template-areas:
      'img logo-name'
      'role role';
    column-gap: 1rem;

    > img {
      grid-area: img;

      width: 3rem;
      height: 3rem;
      flex-shrink: 0;
    }

    > h1 {
      grid-area: logo-name;

      font-size: 2.4rem;
      font-style: normal;
      font-weight: 700;
    }

    span {
      grid-area: role;
      justify-self: end;

      margin-top: -5px;
    }
  }
`

export const Menu = styled.button`
  background: none;
  border: none;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.light_100};

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: none;
  }
`

export const Orders = styled.div`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.light_100};

  position: relative;

  > div {
    width: 1.6rem;
    height: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.tints.tomato_100};
    border-radius: 9.9rem;

    position: absolute;
    top: -0.5rem;
    right: -0.2rem;

    padding: 0.2rem 0.2rem;

    > span {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: none;
  }
`

export const Search = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`

export const NewDish = styled.button`
  width: 100%;

  padding: 1.2rem 0;

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

  display: none;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    > svg {
      font-size: 2.4rem;
    }
  }
`

export const Logout = styled.button`
  display: none;

  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.light_100};

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;

    background: none;
    border: none;
  }
`
