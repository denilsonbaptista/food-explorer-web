import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;

  padding: 5.6rem 0 2.4rem 0;

  background-color: ${({ theme }) => theme.colors.dark_700};

  div.wrapper {
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
  }

  button:nth-of-type(2) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    padding: 2.4rem 0;

    div.wrapper {
      grid-template-columns: max-content 1fr 20rem max-content;
      gap: 3.2rem;
    }

    button:nth-of-type(2) {
      display: block;
    }
  }
`

export const Content = styled.div`
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

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: none;
  }
`

export const Search = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    background-color: ${({ theme }) => theme.colors.dark_900};
    border-radius: 0.5rem;

    padding: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    &:focus-within {
      outline: 1px solid #ffffff;
    }

    > input {
      background: none;
      border: none;

      width: 28rem;

      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;

      outline: none;

      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`

export const Logout = styled.button`
  display: none;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: block;

    background: none;
    border: none;
  }
`
