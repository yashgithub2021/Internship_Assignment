import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }// eslint-disable-next-line
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login') // Redirect to the login page
    };
    return (
        <section>
            <Row className="align-items-center justify-contenr-center">
                <Col xs={6}><h1>Static Table</h1></Col>
                <Col xs={6}> <Button onClick={handleLogout}>Logout</Button>{' '}</Col>
            </Row>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Change</th>
                            <th>Change %</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-0.01</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-0.01</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-0.01</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-0.01</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-0.01</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-0.01</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-0.01</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY </td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-0.01</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>+2.36%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )

}

export default Home