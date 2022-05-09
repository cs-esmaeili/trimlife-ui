import { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { getCookie, setCookie } from '../../global/cookie';
import { _revokeToken } from './../../services/Authorization';
import config from '../../config.json';
import LogIn from './LogIn';
import axios from "axios";

const Detector = () => {
    const [check, setCheck] = useState("checking");
    const [update, setUpdate] = useState(false);

    const revokeToken = async (token) => {
        try {
            const respons = await _revokeToken({ token });
            console.log(respons);
            if (respons.data.status === "ok") {
                await setCookie(config.timeOut, 'token', respons.data.token);
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }
    useEffect(() => {
        const checkConditions = async () => {
            if (getCookie('token') === null) {
                return false;
            } else if (getCookie('token') !== null) {
                const checktoken = await revokeToken(getCookie('token'));
                if (checktoken === true) {
                    return true;
                }
            }
            return false;
        }

        checkConditions().then((reuslt) => {
            setCheck(reuslt);
        })

        return () => {
            setCheck('checking');
        };

    }, [update]);


    if (check === true) {
        return (<div>haha</div>);
    }
    if (check === false) {
        return (
            <LogIn update={() => setUpdate(!update)} />
        );
    }
    if (check === "checking") {
        return (
            <Container fluid className='body vh-100 d-flex flex-column' style={{ justifyContent: "center", alignItems: "center" }}>
                <Row>
                    <Spinner animation="grow" variant="info" style={{ width: "10rem", height: "10rem" }} />
                </Row>
                <Row>
                    <div style={{ color: "white" }}>...برسی وضعیت توکن</div>
                </Row>
            </Container>
        );
    }

}
export default Detector;