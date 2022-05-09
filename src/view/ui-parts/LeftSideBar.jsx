import { Row, Col, Image, Container, Button } from 'react-bootstrap';
import { AiFillSetting } from "react-icons/ai";
import { BsHeadset, BsFillMicFill, BsFillTelephoneXFill } from "react-icons/bs";
import Test from "../assets/images/slide1.jpg";
import ListLeftBar from '../components/ListLeftBar';
import { FaServer } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';


const LeftSideBar = () => {
    return (
        <Col xl={2} className="siderBar h-100 d-flex flex-column rightBorder">
            <Row className='header bottomBorder'>
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
            <Row className='leftSiderBarList flex-grow-1'>
                <Container fluid>
                    <Row>
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                        <ListLeftBar />
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container fluid>
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
                    <Row className='profile topBorder'>
                        <Col xs={9}>
                            <Row>
                                <Col className="profile" xs={8} >
                                    <div>
                                        Javad Esmaeili
                                    </div>
                                    <div>
                                        #50501
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <Image roundedCircle fluid src={Test} alt="..." className='image' />
                                </Col>
                            </Row>
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