import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const ViewOrders = styled.button`
  width: 100%;

  position: relative;

  padding: 1.2rem 0;

  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;

  border: none;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.colors.light_100};

  background: none;

  > svg {
    font-size: 2.4rem;
  }

  > p {
    display: none;
  }

  > span {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0.5rem;
    right: -0.5rem;

    border-radius: 9.9rem;
    background-color: ${({ theme }) => theme.colors.tints.tomato_100};
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    background-color: ${({ theme }) => theme.colors.tints.tomato_100};

    > p {
      display: block;
    }

    > span {
      display: none;
    }
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: ${({ theme }) => theme.colors.dark_200};
  opacity: 0.8;
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 200;
`

export const DialogContent = styled(Dialog.Content)`
  background-color: ${({ theme }) => theme.colors.dark_700};
  border: 1px solid ${({ theme }) => theme.colors.light_600};
  border-radius: 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 50rem;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 300;

  overflow-y: auto;
  scrollbar-width: none;
`

export const AllOrders = styled.div`
  color: ${({ theme }) => theme.colors.light_100};
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  margin: 3.4rem 0;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > img {
    width: 10rem;
    height: 10rem;
  }

  > div p span {
    color: ${({ theme }) => theme.colors.light_500};
  }

  > div button {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors.tints.tomato_400};

    background: none;
    border: none;
  }
`

export const DialogTitle = styled(Dialog.Title)`
  color: ${({ theme }) => theme.colors.light_100};
  font-family: 'Poppins', sans-serif;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`

export const DialogClose = styled(Dialog.Close)`
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
`

export const DialogFinalizeOrders = styled(Dialog.Close)`
  background: transparent;
  border: none;

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
