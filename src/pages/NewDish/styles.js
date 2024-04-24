import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;

  height: 100vh;

  display: grid;
  grid-template-rows: min-content 1fr min-content;

  div.wrapper a:first-child {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.colors.light_300};

    display: flex;
    align-items: center;

    margin-top: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    div.wrapper a:first-child {
      margin-top: 4rem;
    }
  }
`

export const Form = styled.form`
  margin-top: 2.4rem;

  fieldset {
    border: none;
  }

  fieldset legend {
    color: ${({ theme }) => theme.colors.light_300};

    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    margin-bottom: 3.7rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const RowOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: grid;
    grid-template-columns: 22rem 1fr 36rem;
    gap: 3.2rem;
  }
`

export const RowTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: grid;
    grid-template-columns: 1fr 26rem;
    gap: 3.2rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  label {
    color: ${({ theme }) => theme.colors.light_400};

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`

export const File = styled.div`
  position: relative;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    opacity: 1;
    z-index: -1;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    padding: 1.2rem 0;

    background-color: ${({ theme }) => theme.colors.dark_800};
    border-radius: 0.8rem;

    color: ${({ theme }) => theme.colors.light_100};
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;

    cursor: pointer;
  }
`

export const Select = styled.select`
  color: ${({ theme }) => theme.colors.light_400};

  height: 5rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  padding: 1.2rem;

  appearance: none;

  border: none;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.dark_900};
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+);
  background-repeat: no-repeat;
  background-position: right 1.6rem top 50%;

  appearance: none;
`

export const Items = styled.div`
  display: flex;
  gap: 1.6rem;

  height: 5rem;

  padding: 1rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.dark_800};
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  height: 5rem;

  padding: 1.2rem 1.4rem;

  background-color: ${({ theme }) => theme.colors.dark_800};
  border-radius: 0.8rem;

  span,
  input {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 1.6rem */

    color: ${({ theme }) => theme.colors.light_500};
  }

  &:focus-within {
    outline: 1px solid #ffffff;
  }

  input {
    width: 100%;
    border: none;
    background-color: transparent;

    outline: none;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    border: 0;
    background: transparent;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.2rem;

  margin-bottom: 3.5rem;

  > button {
    background-color: ${({ theme }) => theme.colors.tints.tomato_400};
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    justify-content: flex-end;

    > button {
      max-width: 17rem;
    }
  }
`
