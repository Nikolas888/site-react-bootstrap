import React, { Component } from 'react'
import { CarouselItem } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import forestImg from '../asserts/pexels-nejc-košir-338936.jpg'
import eforestImg from '../asserts/pexels-pixabay-247431.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <div>
          <Carousel>
              <Carousel.Item>
                  <img 
                  className='d-block w-100'
                  src={ forestImg }
                  alt="Forest"
                  />
                  <Carousel.Caption>
                      <h3>Forest Image</h3>
                      <p>Можно указать свойство margin, и задать для него четыре параметра, по часовой стрелке</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                  <img 
                  className='d-block w-100'
                  src={ eforestImg }
                  alt="Forest"
                  />
                  <Carousel.Caption>
                      <h3>Elefant Forest Image</h3>
                      <p>Можно указать свойство margin, и задать для него четыре параметра, по часовой стрелке</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                  <img 
                  className='d-block w-100'
                  src={ forestImg }
                  alt="Forest"
                  />
                  <Carousel.Caption>
                      <h3>Forest Image</h3>
                      <p>Можно указать свойство margin, и задать для него четыре параметра, по часовой стрелке</p>
                  </Carousel.Caption>
              </Carousel.Item>

          </Carousel>
      </div>
    )
  }
}
