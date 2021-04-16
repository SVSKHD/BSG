import {useContext} from "react"
import {Card,CardBody,Row,Col,ButtonGroup,Button, Container} from "reactstrap"
import {Link} from "react-router-dom"
import BSG from "../../BSG.jpg"
import {FaFacebookF , FaInstagram , FaPlaystation , FaTv , FaXbox , FaVrCardboard} from "react-icons/fa"

import {UserContext} from "../../context/UserContext"

const Header = () =>{
const context = useContext(UserContext)
    return(
        <div className="header">
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
          <hr/>
          <br/>
          {/* user signup */}
          {context.user ? (
         
            <ButtonGroup>
              <Button outline color="dark">{context.user?.email ? context.user.email:""}</Button>
              <Button onClick={()=>{
                context.setUser(null)
              }} outline color="danger">Signout</Button>
            </ButtonGroup>
         
          ) : (
          <div>
              <Container>
              <Card color="dark">
              <CardBody>
              <ButtonGroup>
               
               <Button 
               color="light"
               >
                <Link to="/signup">
                Signup
                </Link>
               </Button>
               
               <Button
               color="light"
               >
               <Link to="/signin">
               Signin
               </Link>
               </Button>
              </ButtonGroup>
              </CardBody>
              </Card>
              </Container>
          </div>  
         
           
        
          )
          }

         <hr/>
         </CardBody>
        </Card>
        </div>
    )
}
export default Header