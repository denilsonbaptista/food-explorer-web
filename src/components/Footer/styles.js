import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.dark_600};

  padding: 2.4rem 0;

  color: ${({ theme }) => theme.colors.light_700};
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > p:last-child {
      color: ${({ theme }) => theme.colors.light_100};
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 2.4rem;

    > div {
      > p:last-child {
        font-size: 1.4rem;
      }
    }
  }
`

export const Logotype = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  > svg {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    gap: 1rem;

    > svg {
      width: 3rem;
      height: 3rem;
    }
  }
`
