import React from "react"
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
} from "reactstrap"
import {FaTimes} from "react-icons/fa"


const Notfound = () =>{
    return(
     <div>
         <Container>
         <Card>
         <CardBody>
         <h1><FaTimes size={20}/>The Content you are looking for is not found</h1>
         </CardBody>
         </Card>
         </Container>
     </div>
    )
}
export default Notfound