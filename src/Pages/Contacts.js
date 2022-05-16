import React, { Component } from 'react'
import { Button, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap'

export default class Contacts extends Component {
  render() {
    return (
      <Container className='content' style={{width: '500px'}}>
          <h1 className='text-center'>Contact us</h1>
          <Form>
              <FormGroup controlId='formBasicEmail'>
                  <FormLabel>
                      Email address
                  </FormLabel>
                  <FormControl type='email' placeholder='Enter email'>
                  </FormControl>
                  <FormText>
                      We'll newer share youre email with anyone else
                  </FormText>
              </FormGroup>

              <FormGroup controlId='formBasicPasswords'>
              <FormLabel>
                      Example textarea
                  </FormLabel>
                  <FormControl as="textarea" rows={3}>
                  </FormControl>
              </FormGroup>

              <FormGroup controlId='formBasicCheckbox'>
                  <FormCheck type='checkbox' label='Check me out'/>
              </FormGroup>
              <Button variant='primary' type='submit'>
              Submit
                  

              </Button>
          </Form>
      </Container>
    )
  }
}
