import { Container } from "./styles"

import rocket from './../../assets/image/rocket.svg'

const Home = () => {
  return (
    <Container>
      <header className="headerHome">
        <div className="headerSoon">
          <img src={rocket} />
          <h1 className="soonTitle">to<span className="titleColor">do</span></h1>
        </div>
      </header>
    </Container>
  )
}

export default Home