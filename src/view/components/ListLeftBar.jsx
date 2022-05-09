import { Row, Col, Image, Container } from 'react-bootstrap';
import Test from "../assets/images/slide1.jpg";

const ListLeftBar = () => {
    return (
        <Container fluid>
            <Row className='ListLeftBar bottomBorder'>
                <Col xs={8} className="ListLeftBarTexts">
                    <div className='text'>Javad Esmaeili</div>
                    <span className='text'>25 member</span>
                </Col>
                <Col xs={4}>
                    <Image className='ListLeftBarImage' roundedCircle fluid src={Test} alt="..." />
                </Col>
            </Row>
        </Container>
    );

}
export default ListLeftBar