import { Container ,Card , CardBody , Row , Col} from "reactstrap"
import {} from "react-icons/fa"
import SVSK from "../../SVSK.png"

const Footer =()=>{
    return(
        <div>
            <Container>
                <Card>
                <CardBody>
                    <Row>
                        <Col>
                        <h4 className="titletext">Developed by</h4>
                        <img src={SVSK}
                        alt="SVSKHD | Our Tech Channel"
                        height="150"
                        width="150"
                        />
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