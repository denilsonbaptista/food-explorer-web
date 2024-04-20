import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.dark_900};
  border-radius: 0.5rem;

  padding: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  font-size: 2.4rem;
  color: #c4c4cc;

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
`
