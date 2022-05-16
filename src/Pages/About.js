import React, { Component } from 'react'
import { Col, Container, Nav, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container className='content'>
          <TabContainer id='ledt-tabs-example' defaultActiveKey="first">
              <Row>
                  <Col sm={3}>
                      <Nav variant='pills' className='flex-column mt-2'>
                          <Nav.Item>
                              <Nav.Link eventKey="first">
                                  Design
                              </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="second">
                                  Team
                              </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="third">
                                  Prog
                              </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="fourth">
                                  Frame
                              </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="fifth">
                                  Lib
                              </Nav.Link>
                          </Nav.Item>
                      </Nav>
                  </Col>
                  <Col sm={9}>
                      <TabContent>
                          <TabPane eventKey="first">
                              <img src='http://media.culturemap.com/crop/42/d4/800x600/4_Houston_Zoo_clouded_leopard_cubs_October_2012_Tarak.jpg' />
                              <p>figma website template, figma web, figma landing page, figma website, f... Лендинги figma Лендинг пейдж figma Шаблон сайта figma Макеты сайтов figma</p>
                          </TabPane>
                          <TabPane eventKey="second">
                              <img src='https://i.pinimg.com/originals/af/08/c5/af08c5e90e15400ab5db333496b14322.jpg' />
                              <p>figma website template, figma web, figma landing page, figma website, f... Лендинги figma Лендинг пейдж figma Шаблон сайта figma Макеты сайтов figma</p>
                              <p>figma website template, figma web, figma landing page, figma website, f... Лендинги figma Лендинг пейдж figma Шаблон сайта figma Макеты сайтов figma</p>
                          </TabPane>
                          <TabPane eventKey="third">
                              <img src='https://static.tumblr.com/wyldane/qdEmbjity/lop.jpg' />
                              <p>figma website template, figma web, figma landing page, figma website, f... Лендинги figma Лендинг пейдж figma Шаблон сайта figma Макеты сайтов figma</p>
                          </TabPane>
                          <TabPane eventKey="fourth">
                              <img src='https://puzzleit.ru/files/puzzles/116/115669/_original.jpg' />
                              <p>figma website template, figma web, figma landing page, figma website, f... Лендинги figma Лендинг пейдж figma Шаблон сайта figma Макеты сайтов figma</p>
                          </TabPane>
                          <TabPane eventKey="fifth">
                              <img src='https://avatars.mds.yandex.net/i?id=51d6ce5dd910bf722da47af9b2153da3-5248605-images-thumbs&n=13' />
                              <p>figma website template, figma web, figma landing page, figma website, f... Лендинги figma Лендинг пейдж figma Шаблон сайта figma Макеты сайтов figma</p>
                          </TabPane>

                      </TabContent>
                  </Col>
              </Row>

          </TabContainer>
      </Container>
    )
  }
}
