import { Container } from "./styles"

import rocket from './../../assets/image/rocket.svg'

import Input from "../../components/Input"
import Button from "../../components/Button"
import Empty from "../../components/Empty"
import Task from "../../components/Task"
import { useCallback, useEffect, useState } from "react"
import { createTask, getAllTask } from "../../services/api"


const Home = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputTask, setInputTask] = useState<string>("")

  const taskFilter = tasks.filter(task => task.status)

  const handleButtonCreate = () => {
    if (inputTask !== "") {
      createTask(inputTask)
      setInputTask("")
    }
  }

  const handleButtonDelete = () => {

  }

  useEffect(() => {
    getAllTask().then(({ data }) => setTasks(data))
  }, [handleButtonCreate])

  return (
    <Container>
      <header className="headerHome">
        <div className="headerSoon">
          <img src={rocket} />
          <h1 className="soonTitle">to<span className="titleColor">do</span></h1>
        </div>
        <div className="inputArea">
          <Input value={inputTask} onChange={setInputTask} />
          <Button onClick={handleButtonCreate} />
        </div>
      </header>
      <section id="tasks">
        <div className="tasksHeader">
          <p className="taskCreatCount">Tarefas criadas <span className="taskCount">{tasks.length}</span></p>
          <p className="taskFinishCount">Concluídas <span className="taskCount">{taskFilter.length}</span></p>
        </div>
        <div className="tasksList">
          {tasks.length <= 0 ?
            <Empty />
            : tasks.map(task => (
              <Task
                key={task.id}
                onClickDelete={handleButtonDelete}
                {...task}
              />
            ))
          }
        </div>
      </section>
    </Container>
  )
}

export default Home