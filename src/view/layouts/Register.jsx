import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Spinner } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import { RegisterSchema } from './../../global/validator_Schemas';
import { setCookie } from './../../global/cookie';
import Logo from "../assets/images/logo.png";
import { Link, withRouter } from "react-router-dom";
import config from "./../../config.json";
import axios from "axios";
import { _register } from './../../services/Authorization';

const Register = ({ history, update }) => {


    const [show, setShow] = useState(null);
    const [req, setReq] = useState(false);


    const handelSubmit = async ({ email, userName, password }) => {
        try {
            setReq(true);
            console.log({
                email,
                userName,
                password,
            });
            const respons = await _register({
                email,
                userName,
                password,
            });
            const token = respons.data.token;
            await setCookie(config.timeOut, 'token', token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            history.replace(config.web_url);
            update();
            setReq(false);
        } catch (error) {
            setReq(false);
            setShow({ message: error.response.data.message });
            console.log(error);
        }
    };

    return (
        <Container fluid className='d-flex vh-100' style={{ justifyContent: "center", alignItems: "center" }}>
            <Row className='flex-grow-1' style={{ justifyContent: "center" }}>
                <Col xs={3}>
                    <Formik
                        initialValues={{
                            userName: '',
                            email: '',
                            password: '',
                        }}
                        validationSchema={RegisterSchema}
                        onSubmit={values => {
                            handelSubmit(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form onChange={() => { setShow(null) }} className="bottomBorder rightBorder topBorder leftBorder p-3 justify-content-center d-flex flex-column">
                                <Image className='image' roundedCircle fluid src={Logo} alt="..." />
                                <div className="form-group mb-1">
                                    <Field className="form-control form-control-user centerPlaceHolder" name="userName" placeholder="نام کاربری"
                                    />
                                    {errors.userName && touched.userName ? (
                                        <div style={{ textAlign: "center", color: "white" }}>{errors.userName}</div>
                                    ) : null}
                                </div>
                                <div className="form-group mb-1">
                                    <Field className="form-control form-control-user centerPlaceHolder" name="email" placeholder="ایمیل"
                                    />
                                    {errors.email && touched.email ? (
                                        <div style={{ textAlign: "center", color: "white" }}>{errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="form-group mb-1">
                                    <Field className="form-control form-control-user centerPlaceHolder" name="password" placeholder="رمز عبور"
                                    />
                                    {errors.password && touched.password ? (
                                        <div style={{ textAlign: "center", color: "white" }}>{errors.password}</div>
                                    ) : null}
                                </div>
                                {show != null &&
                                    <div className="alert alert-danger" role="alert" style={{ textAlign: "center" }}>
                                        {show.message}
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
                                        <span>ثبت نام</span>
                                    }
                                </Button>
                                <Link
                                    className="collapse-item"
                                    to={config.web_url + "login"}
                                >
                                    <div style={{ textAlign: "right", color: "white", cursor: "pointer" }} >ورود</div>
                                </Link>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );

}
export default withRouter(Register);