import { Container } from "./styles"

import rocket from './../../assets/image/rocket.svg'

import Input from "../../components/Input"
import Button from "../../components/Button"
import Empty from "../../components/Empty"


const Home = () => {
  return (
    <Container>
      <header className="headerHome">
        <div className="headerSoon">
          <img src={rocket} />
          <h1 className="soonTitle">to<span className="titleColor">do</span></h1>
        </div>
        <div className="inputArea">
          <Input />
          <Button />
        </div>
      </header>
      <section id="tasks">
        <div className="tasksHeader">
          <p className="taskCreatCount">Tarefas criadas <span className="taskCount">0</span></p>
          <p className="taskFinishCount">Concluídas <span className="taskCount">0</span></p>
        </div>
        <div className="tasksList">
          <Empty />
        </div>
      </section>
    </Container>
  )
}

export default Home