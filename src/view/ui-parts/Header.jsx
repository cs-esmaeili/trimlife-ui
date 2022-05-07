import { Row, Col } from 'react-bootstrap';
import { FaServer } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';

const Header = () => {
    return (
        <Row className='header'>
            <Col xl={2} className="bottomBorder rightBorder">
                <Row>
                    <Col className='tabActive'>
                        <div className='p-2'>
                            <IoMdPeople className='icons' />
                            <span className='tabTitels'>Feriends</span>
                        </div>
                    </Col>
                    <Col >
                        <div className='p-2'>
                            <FaServer className='icons' />
                            <span className='tabTitels'>Server</span>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xl={10} className="bottomBorder">
                salam
            </Col>
        </Row>
    );
}
export default Header;