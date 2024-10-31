import { TaskContainer } from "./styles"

import { BiTrash } from 'react-icons/bi'
import { BsCheckAll } from 'react-icons/bs'

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
        <input
          id={id}
          checked={status}
          className="checkBoxInput"
          type="checkbox"
        />
        <label htmlFor={id}>{description}</label>
      </div>
      <button className="delete" onClick={() => onClickDelete(id)}>
        <BiTrash size={16} />
      </button>
    </TaskContainer>
  )
}

export default Task