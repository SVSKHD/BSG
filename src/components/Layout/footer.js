import { Container ,Card , CardBody , Row , Col} from "reactstrap"

import SVSK from "../../SVSK.png"

const Footer =()=>{
    return(
        <div>
            <Container fluid>
                <Card>
                <CardBody>
                    <Row>
                        <Col>
                        <div>
                        <a 
                         href="https://svskhd.net/"
                         target="_blank"
                         rel="noreferrer"
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