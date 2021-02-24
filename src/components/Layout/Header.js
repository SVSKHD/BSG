import {Card,CardBody,Row,Col,ButtonGroup,Button} from "reactstrap"
import BSG from "../../BSG.jpg"
import {FaFacebookF , FaInstagram , FaPlaystation , FaTv , FaXbox , FaVrCardboard} from "react-icons/fa"
const Header = () =>{
    return(
        <div>
         <Card>
         <CardBody>
          <Row>
          <Col>
          <img src={BSG}
          alt="BSG | Backstreet gamer"
          height="150"
          width="150"
          />
          <br/>
          {/* socialhandle */}
           <ButtonGroup>
              
              <Button 
              target="_blank" 
              href="https://www.facebook.com/stkjack/" 
              outline color="dark">
                  <FaFacebookF size={25}/>
              </Button>

              <Button 
              target="_blank"
              href="https://www.instagram.com/backstreet.gamer/"
              outline color="dark">
                  <FaInstagram size={25}/>
              </Button>

          </ButtonGroup>
          </Col>
          <Col>
          <h1 className="titletext">BSG | Backstreet Gamer</h1>
          <h3 className="titletext">Gamer of</h3>
          <ButtonGroup>
              <Button outline color="dark"><FaPlaystation size={25}/></Button>
              <Button outline color="dark"><FaTv size={25}/></Button>
              <Button outline color="dark"><FaXbox size={25}/></Button>
              <Button outline color="dark"><FaVrCardboard size={25}/></Button>
          </ButtonGroup>

         
          </Col>
          </Row>
         </CardBody>
        </Card>
        </div>
    )
}
export default Header