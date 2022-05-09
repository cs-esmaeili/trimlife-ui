import { Row, Col, Image, Container } from 'react-bootstrap';
import Test from "../assets/images/slide1.jpg";

const ListRightBar = () => {
    return (
        <Row className='ListRightBar p-3'>
            <Col xs={8} className="texts">
                <div className='text'>Javad Esmaeili</div>
            </Col>
            <Col xs={4}>
                <Image className='image' roundedCircle  src={Test} alt="..." />
            </Col>
        </Row>
    );

}
export default ListRightBar