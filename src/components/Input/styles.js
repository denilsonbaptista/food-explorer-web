import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.dark_800};
  border-radius: 0.8rem;

  input {
    width: 100%;
    height: 5rem;

    padding: 1.2rem 1.4rem;
    border: none;
    background-color: transparent;

    color: ${({ theme }) => theme.colors.light_500};

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 1.6rem */
  }
`
