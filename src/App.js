
import { Container ,Card,CardBody,Button,Row,Col} from 'reactstrap';
import {FaYoutube} from "react-icons/fa"
import './App.css';
import Layout from "./components/Layout/layout";


function App() {
 
  return (
    <div className="App">
    <Container>
    <hr/>
    </Container>
    <Container fluid={true}>
    <Layout>
    <br/>
    <Container>
    <Card>
    <CardBody>
    <Row>
    <Col>
    
    <Button target="_blank" 
    href="https://www.youtube.com/channel/UCX5vWdVLbYYrhwMqH-fHP4g" 
    outline color="danger">
      <FaYoutube size={50}/>
    </Button>

    </Col>
    <Col>
    <h4 className="titletext">Counter</h4>
    {/* <ButtonGroup>
      <Button></Button>
      <Button></Button>
      <Button></Button>
    </ButtonGroup> */}

    </Col>
    </Row>
    </CardBody>
    </Card>
    </Container>
    <hr/>
    <h1>Give away details</h1>
    </Layout>
    </Container>
    </div>
  );
}

export default App;
