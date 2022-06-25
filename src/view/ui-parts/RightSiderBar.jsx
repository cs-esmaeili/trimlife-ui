import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ListRightBar from '../components/ListRightBar';
import { socket } from '../../socket';

const RightSiderBar = ({ server, channel_id }) => {

    const [users, setUsers] = useState(null);

    const userRoles = (users) => {
        let roles = server.roles;
        for (let i = 0; i < roles.length; i++) {
            const role = roles[i];
        }
    }

    useEffect(() => {
        socket.on("usersOnChannel", (data) => {
            setUsers(data);
            userRoles(data);
        });
        socket.emit("usersOnChannel", { server_id: server._id, channel_id });
    }, []);

    return (
        <Col xl={2} className="siderBar h-100 d-flex flex-column leftBorder">
            <Row className='rightSideBarList flex-grow-1'>
                <Container fluid>
                    <Row>
                        <div className='role'>
                            Admin
                        </div>
                    </Row>
                    {users != null && users.map((value) => {
                        return (
                            <ListRightBar data={value} />
                        )
                    })} 

                </Container>
            </Row>
        </Col>
    );
}
export default RightSiderBar;