import { ButtonContainer } from "./styles"

import { FaPlusCircle } from 'react-icons/fa'

interface ButtonProps {
  onClick: () => void
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={onClick}
    >
      <p>Criar</p>
      <FaPlusCircle color="#F2F2F2" />
    </ButtonContainer>
  )
}

export default Button