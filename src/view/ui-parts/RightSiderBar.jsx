import { Row, Col, Container } from 'react-bootstrap';
import ListRightBar from '../components/ListRightBar';

const RightSiderBar = () => {
    return (
        <Col xl={2}  className="siderBar h-100 d-flex flex-column rightBorder">
            <Row className='rightSideBarList flex-grow-1'>
                <Container fluid>
                    <Row>
                        <div className='role'>
                            Admin
                        </div>
                    </Row>
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <div className='role'>
                        Admin
                    </div>
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />

                    <ListRightBar />
                    <ListRightBar />
                    <ListRightBar />
                    1
                </Container>
            </Row>
        </Col>
    );
}
export default RightSiderBar;