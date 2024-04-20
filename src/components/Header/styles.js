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

  div.wrapper button:nth-of-type(2) {
    display: none;
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

    div.wrapper button:nth-of-type(2) {
      display: block;
    }

    &[data-menu-is-open='true'] {
      display: flex;
      padding: 2.4rem 0;
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
    display: block;
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
