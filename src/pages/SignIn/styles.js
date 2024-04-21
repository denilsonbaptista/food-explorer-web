import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-items: center;

  height: 100vh;

  > div {
    display: grid;
    place-content: center;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    > div {
      grid-template-columns: 1fr 48rem;
    }
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.light_100};
  font-family: 'Roboto', sans-serif;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 7.2rem;

  > img {
    width: 5.6rem;
    height: 5.6rem;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 2.5rem;

    > img {
      width: 5.6rem;
      height: 5.6rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > a {
    color: ${({ theme }) => theme.colors.light_100};
    text-align: center;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
  }

  > h2 {
    color: ${({ theme }) => theme.colors.light_100};
    text-align: center;

    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    display: none;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    padding: 6.4rem;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.colors.dark_700};

    > h2 {
      display: block;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;

  > label {
    color: ${({ theme }) => theme.colors.light_400};

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`
