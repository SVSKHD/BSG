
import { Container ,Card,CardBody,Button,Row,Col} from 'reactstrap';
import {FaYoutube} from "react-icons/fa"
import './App.css';
import Layout from "./components/Layout/layout";
import SEO from './components/seo';



function App() {
  return (
    <div>
    <SEO
    title="BSG | Backstreet gamer from Tirupati"
    description="All about Gamer from Tirupati with regular live gaming feed and every entertaining feed is seen here
    just subscribe and watch the show"
    keywords="Gamer from Tirupati , Tirupati , COnsole Gamer , BSG-Backstreet gamer"
    canurl="https://bsgamer.in"
    ogimg="./BSG.jpg"
    />
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
    </div>
  );
}

export default App;
