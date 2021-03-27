import { Container ,Card , CardBody , Row , Col} from "reactstrap"
import {} from "react-icons/fa"
import SVSK from "../../SVSK.png"
import { Link } from "react-router-dom"

const Footer =()=>{
    return(
        <div>
            <Container>
                <Card>
                <CardBody>
                    <Row>
                        <Col>
                        <div>
                        <a 
                         href="https://svskhd.net/"
                         target="_blank"
                        >
                        <h4 className="titletext">Developed by</h4>
                        <img src={SVSK}
                        alt="SVSKHD | Our Tech Channel"
                        height="150"
                        width="150"
                        />
                        </a>
                        </div>
                        </Col>
                        <Col>
                        <h3 className="titletext">Tech Inside</h3>
                        </Col>
                    </Row>

                </CardBody>
                </Card>
            </Container>
        </div>
    )
}
export default Footer