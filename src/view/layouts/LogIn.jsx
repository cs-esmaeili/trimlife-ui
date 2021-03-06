import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Spinner } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import { LogInSchema } from './../../global/validator_Schemas';
import { setCookie } from './../../global/cookie';
import Logo from "../assets/images/logo.png";
import { Link, withRouter } from "react-router-dom";
import config from "./../../config.json";
import axios from "axios";
import { _login } from './../../services/Authorization';

const LogIn = ({ history, update }) => {
    const [show, setShow] = useState(false);
    const [req, setReq] = useState(false);
    const handelSubmit = async ({ username, password }) => {
        try {
            setReq(true);
            const respons = await _login({
                username,
                password,
            });
            if (respons.data.status === "ok") {
                const token = respons.data.token;
                await setCookie(config.timeOut, 'token', token);
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                history.replace(config.web_url);
                update();
            }
            setReq(false);
        } catch (error) {
            setReq(false);
            setShow(true);
            console.log(error);
        }
    };
    return (
        <Container fluid className='d-flex vh-100' style={{ justifyContent: "center", alignItems: "center" }}>
            <Row className='flex-grow-1' style={{ justifyContent: "center" }}>
                <Col xs={3}>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        validationSchema={LogInSchema}
                        onSubmit={values => {
                            handelSubmit(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form onChange={() => { setShow(false) }} className="bottomBorder rightBorder topBorder leftBorder p-3 justify-content-center d-flex flex-column">
                                <Image className='image' roundedCircle fluid src={Logo} alt="..." />
                                <div className="form-group mb-1">
                                    <Field className="form-control form-control-user centerPlaceHolder" name="username" placeholder="?????? ????????????"
                                    />
                                    {errors.username && touched.username ? (
                                        <div style={{ textAlign: "center", color: "white" }}>{errors.username}</div>
                                    ) : null}
                                </div>
                                <div className="form-group mb-1">
                                    <Field className="form-control form-control-user centerPlaceHolder" name="password" placeholder="?????? ????????"
                                    />
                                    {errors.password && touched.password ? (
                                        <div style={{ textAlign: "center", color: "white" }}>{errors.password}</div>
                                    ) : null}
                                </div>
                                {show &&
                                    <div className="alert alert-danger" role="alert" style={{ textAlign: "center" }}>
                                        ?????? ???????????? ???? ?????? ???????? ???????????? ??????
                                    </div>
                                }
                                <Button variant="primary" disabled={(req) ? true : false} type="submit">
                                    {req ?
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        :
                                        <span>????????</span>
                                    }
                                </Button>
                                <Link
                                    className="collapse-item"
                                    to={config.web_url + "register"}
                                >
                                    <div style={{ textAlign: "right", color: "white", cursor: "pointer" }} >?????? ??????</div>
                                </Link>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
}
export default withRouter(LogIn);