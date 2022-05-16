import React, { Component } from 'react'
import { Col, Media, Container, Row, Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
  render() {
    return (
        <Container className='content'>
            <Row>
                <Col md="9">
                <div className='d-flex align-items-center'>
                    <div className='flex-shrink-0 margin-bottom'>
                        <img 
                        width={150}
                        height={150}
                        className="mr-3"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                        />
                        </div>
                        <div className='flex-grow-1 ms-3'>
                            <h5>
                                 Blog post
                            </h5>
                            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
                            <br />
                        </div>
                    </div>

                    <div className='d-flex align-items-center'>
                    <div className='flex-shrink-0 margin-bottom'>
                        <img 
                        width={150}
                        height={150}
                        className="mr-3"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                        />
                        </div>
                        <div className='flex-grow-1 ms-3'>
                            <h5>
                                 Blog post
                            </h5>
                            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
                        </div>
                    </div>  
                    
                    <div className='d-flex align-items-center'>
                    <div className='flex-shrink-0 margin-bottom'>
                        <img 
                        width={150}
                        height={150}
                        className="mr-3"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                        />
                        </div>
                        <div className='flex-grow-1 ms-3'>
                            <h5>
                                 Blog post
                            </h5>
                            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
                        </div>
                    </div>  
                    
                    <div className='d-flex align-items-center'>
                    <div className='flex-shrink-0 margin-bottom'>
                        <img 
                        width={150}
                        height={150}
                        className="mr-3"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                        />
                        </div>
                        <div className='flex-grow-1 ms-3'>
                            <h5>
                                 Blog post
                            </h5>
                            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
                        </div>
                    </div>
                </Col>
                <Col md='3'>
                    <h5 className='text-center mt-70px'>Categories</h5>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>Html/Css</ListGroup.Item>
                            <ListGroup.Item>JavaScript</ListGroup.Item>
                            <ListGroup.Item>Python</ListGroup.Item>
                            <ListGroup.Item>Java</ListGroup.Item>
                            <ListGroup.Item>C++</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card className='text-center mt-3' bg='light'>
                        <Card.Body>
                            <Card.Title>Side widget</Card.Title>
                            <Card.Text>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
  }
}