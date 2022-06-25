import { Row, Col, Image, Container } from 'react-bootstrap';
import Test from "../assets/images/slide1.jpg";

const ListLeftBar = ({ data, setServer }) => {
    const { name, users, image } = data;
    return (
        <Container fluid onClick={() => setServer(data)} style={{ cursor: "pointer" }}>
            <Row className='ListLeftBar bottomBorder'>
                <Col xs={8} className="texts">
                    <div className='text'>{name}</div>
                    <span className='text'>{users.length}</span>
                </Col>
                <Col xs={4}>
                    <Image className='image' roundedCircle fluid src={image} alt="..." />
                </Col>
            </Row>
        </Container>
    );

}
export default ListLeftBar