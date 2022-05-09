import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RightSiderBar from './../ui-parts/RightSiderBar';
import LeftSideBar from '../ui-parts/LeftSideBar';
import Content from './../ui-parts/Content';
import Channels from './../ui-parts/Channels';
import { FaServer } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';

const Main = () => {
    return (
        <Container fluid className='body vh-100 d-flex flex-column'>
            <Row className='flex-grow-1 h-100 wrapper'>
                <LeftSideBar />
                <Channels />
                <Col xl={8} className="siderBar h-100 d-flex flex-column">
                    <Row className='bottomBorder' style={{ backgroundColor: "red" }}>
                        <Container fluid>
                            <Row className='header' >
                                <Col className='tabActive'>
                                    <div className='p-2'>
                                        <IoMdPeople className='icons' />
                                        <span className='tabTitels'>Feriends</span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row className='flex-grow-1 h-100 wrapper'>
                        <Content />
                        <RightSiderBar />
                    </Row>
                </Col>
            </Row>
        </Container>
    );

}
export default Main;