import { useState, useEffect } from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import { FaBullhorn } from "react-icons/fa";
import { GoNote } from "react-icons/go";
import { IoMdPeople } from 'react-icons/io';
import { socket } from '../../socket';
import Test from "../assets/images/slide1.jpg";
import useGenerator from "../../global/Idgenerator";

const Channels = ({ server, setChannel }) => {

    const [channelsList, setChannelsList] = useState(null);
    const [generateID] = useGenerator();
    useEffect(() => {
        socket.on("channelsList", (data) => {
            setChannelsList(data);
        });
        socket.emit("channelsList", { serverId: server._id });
        // socket.on("usersOnChannel", (data) => {
        //     console.log(data);
        // });
        // socket.emit("usersOnChannel", { serverId: server._id, channel_id: "628116f80633b1d197b77aae" });
    }, []);

    return (
        <Col xl={2} className="rightBorder  h-100" >
            <Row className='flex-grow-1' >
                <Container fluid>
                    <Row className='channelHeader' >
                        <Col xs={12} className="bottomBorder">
                            <Row>
                                <Col >
                                    <div className='p-2 title'>
                                        <span>{server.name}</span>
                                        <IoMdPeople className='headerIcon' />
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </Row>
            <Row className='flex-grow-1'  >
                {channelsList != null &&
                    channelsList.map((value1) => {
                        return (
                            <Container fluid key={generateID()}>
                                <Row className='category mt-2 hand' key={generateID()}>
                                    <Col>
                                        {value1.name}
                                    </Col>
                                </Row>
                                {value1.channels.map((value2) => {
                                    if (value2.type === true) {
                                        return (
                                            <Row className='channel mt-1 hand' key={generateID()}>
                                                <Col>
                                                    <FaBullhorn className='icon' />
                                                    <span>{value2.name}</span>
                                                    <Row>
                                                        <div className='d-flex'>
                                                            <FaBullhorn className='icon' style={{ visibility: "hidden" }} />
                                                            <div>
                                                                <Image roundedCircle fluid src={Test} alt="..." className='image' />
                                                                <span>salam</span>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        );
                                    } else {
                                        return (
                                            <Row className='channel mt-1 hand' onClick={() => setChannel(value2)} key={generateID()}>
                                                <Col>
                                                    <GoNote className='icon' />
                                                    <span>{value2.name}</span>
                                                </Col>
                                            </Row>
                                        );
                                    }
                                })}
                            </Container>
                        );
                    })
                }
            </Row>
        </Col>
    );
}
export default Channels;
