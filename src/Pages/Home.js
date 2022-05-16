import React, { Component } from 'react'
import { Card, CardImg, Container, CardDeck, Button, CardGroup, Row } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'

export default class Home extends Component {
  render() {
    return (
        <>
          <CarouselBox />
          <Container>
              <h2 className='text-center m-4'>Our team</h2>
              <Row md={3} className="m-4">
                  <Card>
                      <CardImg variant='top'
                      src='https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
                      <Card.Body>
                          <Card.Title>Developers</Card.Title>
                          <Card.Text>Pexels aggregates the best free stock photos and videos on one page.* Free Stock </Card.Text>
                          <Button variant='primary'>About team</Button>
                      </Card.Body>
                  </Card>
                  <Card>

                      <Card.Body>
                          <Card.Title>Developers</Card.Title>
                          <Card.Text>Pexels aggregates the best free stock photos and videos on one page.* Free Stock </Card.Text>
                          <Button variant='primary'>About team</Button>
                      </Card.Body>
                      <CardImg variant='bottom'
                      src='https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
                  </Card>
                  <Card>
                      <CardImg variant='top'
                      src='https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
                      <Card.Body>
                          <Card.Title>Developers</Card.Title>
                          <Card.Text>Pexels aggregates the best free stock photos and videos on one page.* Free Stock </Card.Text>
                          <Button variant='primary'>About team</Button>
                      </Card.Body>
                  </Card>
                  </Row>

          </Container>
          </>
    )
  }
}
