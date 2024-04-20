import styled from 'styled-components'

export const Container = styled.aside`
  position: fixed;
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.dark_400};
  z-index: 100;

  display: none;

  &[data-menu-is-open='true'] {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    &[data-menu-is-open='true'] {
      display: none;
    }
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 6rem 2.8rem 3rem;

  background-color: ${({ theme }) => theme.colors.dark_700};
`

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: 0;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.light_100};
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.light_100};
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const Search = styled.div`
  padding: 3.6rem 2.8rem 0;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3.6rem 2.8rem;
`

export const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  text-align: left;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.light_300};

  background: transparent;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark_1000};

  padding: 1rem;
`
