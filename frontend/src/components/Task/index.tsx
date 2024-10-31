import { TaskContainer } from "./styles"

import { BiTrash } from 'react-icons/bi'

interface TaskProsp {
  id: string
  description: string
  status: boolean
  onClickDelete: (id: string) => void
  onClickUpdate: (id: string, status: boolean) => void
}

const Task = ({ id, description, status, onClickDelete, onClickUpdate }: TaskProsp) => {
  return (
    <TaskContainer
      onClick={() => onClickUpdate(id, status)}
      status={status}
    >
      <div className="checkText">
        <input type="checkbox" id={id} checked={status} />
        <label htmlFor={id} >{description}</label>
      </div>
      <button className="delete" onClick={() => onClickDelete(id)}>
        <BiTrash size={16} />
      </button>
    </TaskContainer>
  )
}

export default Task