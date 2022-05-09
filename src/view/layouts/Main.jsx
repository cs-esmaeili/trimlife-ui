import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RightSiderBar from './../ui-parts/RightSiderBar';
import LeftSideBar from '../ui-parts/LeftSideBar';
import Header from './../ui-parts/Header';
import Content from './../ui-parts/Content';
import Channels from './../ui-parts/Channels';

const Main = () => {
    return (
        <Container fluid className='body vh-100 d-flex flex-column'>
            <Header />
            <Row className='flex-grow-1 wrapper'>
                <LeftSideBar />
                <Channels />
                <Content />
                <RightSiderBar />
            </Row>
        </Container>
    );

}
export default Main;