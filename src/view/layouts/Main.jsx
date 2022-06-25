import { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import RightSiderBar from './../ui-parts/RightSiderBar';
import LeftSideBar from '../ui-parts/LeftSideBar';
import Content from './../ui-parts/Content';
import Channels from './../ui-parts/Channels';
import { IoMdPeople } from 'react-icons/io';
import { connect, socket } from '../../socket';
const Main = () => {

    const [scoketStatus, setSocketStatus] = useState(false);
    const [tabActive, setTabActive] = useState(false);
    const [server, setServer] = useState(null);
    const [channel, setChannel] = useState(null);
    useEffect(() => {
        connect().then((result) => {
            socket.on("connect", (socket) => {
                setSocketStatus(result);
                console.log("connect");
            });
            socket.on("disconnect", (socket) => {
                setSocketStatus(false);
                console.log("disconnect");
            });

            // console.log(socket);
        });
    }, []);
    return (
        <Container fluid className='body vh-100 d-flex flex-column'>
            {scoketStatus ?
                <Row className='flex-grow-1 h-100 wrapper'>
                    <LeftSideBar tabActive={tabActive} setTabActive={setTabActive} setServer={setServer} />
                    {server &&
                        <Channels server={server} setChannel={setChannel} />
                    }
                    <Col xl={8} className="siderBar h-100 d-flex flex-column flex-grow-1">
                        <Row className='bottomBorder'>
                            <button onClick={() => { socket.emit('forceDisconnect') }}>test</button>
                            <Container fluid>
                                <Row className='header' >
                                    <Col >
                                        {channel != null &&
                                            <div className='p-2'>
                                                <IoMdPeople className='icons' />
                                                <span className='tabTitels'>{channel.name}</span>
                                            </div>
                                        }
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                        <Row className='flex-grow-1 h-100 wrapper'>
                            <Content />
                            {channel != null &&
                                <RightSiderBar server={server} channel_id={channel._id} />
                            }
                        </Row>
                    </Col>
                </Row>
                :
                <Container fluid className='body vh-100 d-flex flex-column' style={{ justifyContent: "center", alignItems: "center" }}>
                    <Row>
                        <Spinner animation="grow" variant="info" style={{ width: "10rem", height: "10rem" }} />
                    </Row>
                    <Row>
                        <div style={{ color: "white" }}>...  در حال اتصال سوکت</div>
                    </Row>
                </Container>
            }

        </Container>
    );

}
export default Main;