import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem 1.6rem;

  border-radius: 0.8rem;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? `transparent` : theme.colors.light_600};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.colors.light_500}` : 'none'};

  > input {
    border: none;
    background-color: transparent;

    width: 100%;

    color: ${({ theme }) => theme.colors.light_100};

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;

    outline: none;
  }

  > button {
    background-color: transparent;
    border: none;
  }
`
