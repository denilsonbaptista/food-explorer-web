import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;

  height: 17.2rem;
  padding: 1.4rem;

  resize: none;
  border: none;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.dark_800};

  color: ${({ theme }) => theme.colors.light_500};
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`
