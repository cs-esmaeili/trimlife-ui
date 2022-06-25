import { useState, useEffect } from 'react';
import { Row, Col, Image, Container, Button } from 'react-bootstrap';
import { AiFillSetting } from "react-icons/ai";
import { BsHeadset, BsFillMicFill, BsFillTelephoneXFill } from "react-icons/bs";
import ListLeftBar from '../components/ListLeftBar';
import { FaServer } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { socket } from '../../socket';
import useGenerator from "../../global/Idgenerator";

const LeftSideBar = ({ tabActive, setTabActive, setServer }) => {

    const [servers, setServers] = useState(null);
    const [profile, setProfile] = useState(null);

    const [generateID] = useGenerator();

    useEffect(() => {
        socket.on("serversList", (data) => {
            setServers(data);
        });
        socket.on("userProfile", (data) => {
            setProfile(data);
        });
        socket.emit("serversList");
        socket.emit("userProfile");
    }, []);

    return (
        <Col xl={2} className="siderBar h-100 d-flex flex-column rightBorder">
            <Row className='header bottomBorder'>
                <Col className={!tabActive ? "tabActive" : ""} onClick={() => {
                    setTabActive(false);
                    setServer(null);
                }}>
                    <div className='p-2'>
                        <IoMdPeople className='icons' />
                        <span className='tabTitels'>Feriends</span>
                    </div>
                </Col>
                <Col className={tabActive ? "tabActive" : ""} onClick={() => setTabActive(true)}>
                    <div className='p-2'>
                        <FaServer className='icons' />
                        <span className='tabTitels'>Server</span>
                    </div>
                </Col>
            </Row>
            <Row className='leftSiderBarList flex-grow-1'>
                <Container fluid>
                    <Row>
                        {tabActive && servers != null && servers.map((value) => {
                            return (
                                <ListLeftBar data={value} key={generateID()} setServer={setServer} />
                            );
                        })}

                    </Row>
                </Container>
            </Row>
            <Row>
                <Container fluid>
                    {1 > 3 &&
                        <Row>
                            <Container fluid className='connectionStatus connectionStatus-active'>
                                <Row className='mb-2'>
                                    <Col xs={2}>
                                        <div className="signal-bars mt1 sizing-box good four-bars">
                                            <div className="first-bar bar"></div>
                                            <div className="second-bar bar"></div>
                                            <div className="third-bar bar"></div>
                                            <div className="fourth-bar bar"></div>
                                            <div className="fifth-bar bar"></div>
                                        </div>
                                    </Col>
                                    <Col xs={8}>
                                        <span>Voice Connected</span>
                                    </Col>
                                    <Col xs={2}>
                                        <BsFillTelephoneXFill className='icons' />
                                    </Col>
                                    {/* <div className="signal-bars mt1 sizing-box ok three-bars">
                                    <div className="first-bar bar"></div>
                                    <div className="second-bar bar"></div>
                                    <div className="third-bar bar"></div>
                                    <div className="fourth-bar bar"></div>
                                    <div className="fifth-bar bar"></div>
                                </div>
                                <div className="signal-bars mt1 sizing-box bad two-bars">
                                    <div className="first-bar bar"></div>
                                    <div className="second-bar bar"></div>
                                    <div className="third-bar bar"></div>
                                    <div className="fourth-bar bar"></div>
                                    <div className="fifth-bar bar"></div>
                                </div>
                                <div className="signal-bars mt1 sizing-box bad one-bar">
                                    <div className="first-bar bar"></div>
                                    <div className="second-bar bar"></div>
                                    <div className="third-bar bar"></div>
                                    <div className="fourth-bar bar"></div>
                                    <div className="fifth-bar bar"></div>
                                </div> */}
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className='buttons' >Screen</Button>
                                    </Col>
                                    <Col>
                                        <Button className='buttons' >Video</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    }
                    <Row className='profile topBorder'>
                        <Col xs={9}>
                            {profile != null &&
                                <Row>
                                    <Col className="profile" xs={8} >
                                        <div>
                                            {profile.userName.name}
                                        </div>
                                        <div>
                                            {`#${profile.userName.tag}`}
                                        </div>
                                    </Col>
                                    <Col xs={4}>
                                        <Image roundedCircle fluid src={profile.image} alt="..." className='image' />
                                    </Col>
                                </Row>
                            }
                        </Col>
                        <Col className='centerParent' xs={3}>
                            <BsFillMicFill className='profileIcons' />
                            <BsHeadset className='profileIcons' />
                            <AiFillSetting className='profileIcons' />
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Col >
    );
}
export default LeftSideBar; 