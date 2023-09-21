import Container from "./common/Container";
import Main from "./common/Main";
import SidePanel from "./common/SidePanel";

export default function App() {
  
  return (
    <Container className="register">
      <SidePanel className="col-md-3" />
      <Main className="col-md-9" />
    </Container>
  )
}