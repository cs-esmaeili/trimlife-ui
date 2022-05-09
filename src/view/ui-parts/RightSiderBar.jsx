import { Row, Col, Container } from 'react-bootstrap';
import ListRightBar from '../components/ListRightBar';

const RightSiderBar = () => {
    return (
        <Col xl={2} className="siderBar  h-100 d-flex flex-column leftBorder">
            <Row className='rightSideBarList'>
                <div className='role'>
                    Admin
                </div>
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
            </Row>
        </Col>
    );
}
export default RightSiderBar;