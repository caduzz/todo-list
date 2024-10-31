import { TaskContainer } from "./styles"

import { BiTrash } from 'react-icons/bi'

interface TaskProsp {
  id: string
  description: string
  status: boolean
  onClickDelete: () => void
}

const Task = ({ id, description, status, onClickDelete }: TaskProsp) => {
  return (
    <TaskContainer>
      <div className="checkText">
        <input type="checkbox" id={id} />
        <label htmlFor={id} >{description}</label>
      </div>
      <button className="delete" onClick={onClickDelete}>
        <BiTrash size={16} />
      </button>
    </TaskContainer>
  )
}

export default Task