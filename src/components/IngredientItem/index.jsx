import { X, Plus } from '@phosphor-icons/react'

import { Container } from './styles'

export function IngredientItem({ isNew = false, values, onClick, ...rest }) {
  return (
    <Container $isNew={isNew}>
      <input type="text" value={values} readOnly={!isNew} {...rest} />

      <button type="button" onClick={onClick}>
        {isNew ? (
          <Plus size={16} color="#7C7C8A" />
        ) : (
          <X size={16} color="#FFFFFF" />
        )}
      </button>
    </Container>
  )
}
