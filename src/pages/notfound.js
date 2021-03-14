import React from "react"
import {
    Container,
    Card,
    CardBody,
    Button
} from "reactstrap"
import {FaTimes , FaArrowCircleLeft} from "react-icons/fa"
import BSG from "../BSG.jpg"

const Notfound = () =>{
    return(
     <div>
         <Container fluid>
         <br/>
         <div align="center">
         <Container>
         <Card>
             <CardBody>
               <img src={BSG}
                alt="BSG | Backstreet gamer"
                height="150"
                width="150"
                />
              <br/>
              <br/>
              
              <Button href="/" outline color="dark">
              <FaArrowCircleLeft size={30} />
              </Button>
             </CardBody>
         </Card>
         </Container>
         <br/>
         <Card>
         <CardBody className="titletext">
         <h1 className="text-dark"><FaTimes size={50}/>
         The Content you are looking for is not found</h1>
         </CardBody>
         </Card>
         </div>
         </Container>
     </div>
    )
}
export default Notfound