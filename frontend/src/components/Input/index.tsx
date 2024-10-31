import { InputContainer } from "./styles"

interface InputProps {
  value: string,
  onChange: (v: string) => void
}

const Input = ({ value, onChange }: InputProps) => {
  return (
    <InputContainer
      type="text"
      placeholder="Adicione uma nova tarefa"
      value={value}
      onChange={({ target }) => onChange(target.value)}
    />
  )
}

export default Input