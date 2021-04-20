import {useState , useEffect} from "react"
import { Container ,Card,CardBody,Button,Row,Col,CardTitle} from 'reactstrap';
import {FaYoutube} from "react-icons/fa"
import "./App.css"
import Layout from "./components/Layout/layout";
import SEO from './components/seo';
import BSGQR from "./BSGQR.png"
import Axios from "axios"


function App() {
    const [details, setDetails] = useState();
    const apiURL = "https://api.covid19india.org/data.json";
    const fetchDetails = async () => {
      const { data } = await Axios.get(apiURL);
      const details = data.statewise[4];
      setDetails(details)
      console.log(details)
    };
  
    
    useEffect(() => {
      fetchDetails();
    }, []);
  return (
    <div>
    
    <SEO
    title="BSG | BackStreet gamer Official from Tirupati | BackStreetGamer Official"
    description="All about Official Gamer from Tirupati with regular live gaming feed and every entertaining feed is seen here
    just subscribe and watch the show"
    keywords="Official Tirupati Gamer , 
              Gamer from Tirupati , 
              Tirupati , 
              Console Gamer , 
              BSG-Backstreet gamer
              BackStreetGamer Official,
              BSG,
              PC Gamer"
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
    
    <Card>
      <CardBody>
        <Row>
        <Col>
        
        </Col>
        <Col xs="12" md="4" lg="4">
        <h1 className="titletexti">BSG | Backstreet Gamer Official</h1>
        <Card color="danger">
          <CardBody>
               <div className="coronatext">
               <h6>Present "Andhra-Pradesh" Corona Status</h6>
                <br/>
               <h6>Stay Safe 😷 and Start playing Games 🕹️ </h6>
                <hr/>
                <CardTitle>Active  : {details?.active}</CardTitle>
                <CardTitle>Confirmed  : {details?.confirmed}</CardTitle>
                <CardTitle>Confirmed  : {details?.confirmed}</CardTitle>
                <CardTitle>Recovered  : {details?.recovered}</CardTitle>
                <CardTitle>Death  : {details?.deaths}</CardTitle>
               </div>
          </CardBody>
        </Card>
        </Col>
        <Col>
        </Col>
        </Row>
     
      </CardBody>
    </Card>
    
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
    <h4 className="titletext">Scan or Click on Qr code</h4>
    <div>
    
    <Button 
    outline color="dark"
    target="_blank"  
    href="https://www.youtube.com/channel/UCX5vWdVLbYYrhwMqH-fHP4g">

    <img
    height="200"
    width="200"
    src={BSGQR}
    alt="Backstreet gamer Qr code"
    className="img-thumbnail rounded"
    />

    </Button>
    </div>
    <br/>
    <h6 className="titletext">Subscribe the channel</h6>

    </Col>
    </Row>
    </CardBody>
    </Card>
    </Container>
    <hr/>
   
    </Layout>
    </Container>
    </div>
    </div>
  );
}

export default App;
