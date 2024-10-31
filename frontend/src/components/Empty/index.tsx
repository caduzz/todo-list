import { EmptyContainer } from "./styles"

import emptyIcon from '../../assets/image/empty.png'

const Empty = () => {
  return (
    <EmptyContainer>
      <img src={emptyIcon} />
      <p className="emptyTilte">Você ainda não tem tarefas cadastradas</p>
      <p className="emptySubtitle">Crie tarefas e organize seus itens a fazer</p>
    </EmptyContainer>
  )
}

export default Empty