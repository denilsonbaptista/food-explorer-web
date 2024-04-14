import styled from 'styled-components'

export const Container = styled.span`
  padding: 0.4rem 0.8rem;

  background-color: ${({ theme }) => theme.colors.dark_1000};
  border-radius: 0.5rem;

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem; /* 171.429% */
`
