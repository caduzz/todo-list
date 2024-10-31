import { Container } from "./styles"

import rocket from './../../assets/image/rocket.svg'
import Input from "../../components/Input"

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
        </div>
      </header>

    </Container>
  )
}

export default Home