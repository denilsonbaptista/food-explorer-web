import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;

  padding: 1.2rem 0;

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;

  border: none;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.colors.light_100};
  background-color: ${({ theme }) => theme.colors.tints.tomato_100};
`
