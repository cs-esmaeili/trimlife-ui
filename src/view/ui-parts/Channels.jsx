import { Row, Col, Container } from 'react-bootstrap';
import { FaServer } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';

const Channels = () => {
    return (
        <Col xl={2} className="rightBorder  h-100">
            <Row className='flex-grow-1'>
                <Container fluid>
                    <Row className='channel'>
                        <Col xs={12} className="bottomBorder">
                            <Row>
                                <Col >
                                    <div className='p-2 title'>
                                        <span>Server Name</span>
                                        <IoMdPeople className='icon' />
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </Row>
            <Row className='flex-grow-1'>
                salam
            </Row>
        </Col>
    );
}
export default Channels;
